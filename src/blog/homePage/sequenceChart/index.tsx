import { uniqueId } from 'lodash-es';
import { FC, memo, useEffect, useRef } from 'react';
import { renderMsc } from 'mscgenjs';

type SequenceChartProps = {
  msc: string;
  onClick: (key: string) => void;
};

const SequenceChart: FC<SequenceChartProps> = memo(({ msc, onClick }) => {
  const idRef = useRef(uniqueId('msc_sequence_diagram_'));

  const bindEvents = (event: MouseEvent) => {
    event.preventDefault();
    const path = event.composedPath();
    for (const i in path) {
      const link = path[i] as HTMLElement;
      if ('getAttribute' in link && link.getAttribute('xlink:title')) {
        const key = link.getAttribute('xlink:title');
        if (key) {
          onClick(key);
        }

        break;
      }
    }
  };

  useEffect(() => {
    const elementId = idRef.current;

    if (msc) {
      document.getElementById(elementId)!.innerHTML = '';
      renderMsc(
        msc,
        {
          additionalTemplate: 'fountainpen',
          mirrorEntitiesOnBottom: true,
          elementId,
          styleAdditions: 'backfround: red',
        },
        handleRenderMscResult,
      );
    }

    return () => {
      document.getElementById(elementId)?.removeEventListener('click', bindEvents);
    };
  }, [msc]);

  function handleRenderMscResult(pError: Error, pSuccess: string) {
    if (pError) {
      console.error(pError);
      return;
    }

    if (pSuccess) {
      document.getElementById(idRef.current)?.addEventListener('click', bindEvents);
      return;
    }

    console.log('Wat! Error nor success?');
  }

  return <div id={idRef.current} />;
});

export default SequenceChart;
