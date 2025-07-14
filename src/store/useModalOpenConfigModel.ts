import { OpenTypeConfig } from '@/interface/modalOpenConfig';
import { useCallback, useMemo } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useShallow } from 'zustand/shallow';

const initialState: Record<OpenTypeConfig, boolean> = {
  [OpenTypeConfig.MaskOpen]: false,
  [OpenTypeConfig.CommandOpen]: false,
};

type PayloadType = {
  type: OpenTypeConfig;
  open: boolean;
};

type ModelType = {
  onOpenChange: (payload: PayloadType) => void;
} & Record<OpenTypeConfig, boolean>;

const useModalOpenConfigModel = create<ModelType>()(
  immer((set, get) => ({
    ...initialState,
    onOpenChange(payload: PayloadType) {
      set(state => {
        state[payload.type] = payload.open;
      });
    },
  })),
);

export const useModalOpen = (openType: OpenTypeConfig) => {
  const { open, onOpenChange } = useModalOpenConfigModel(
    useShallow(state => ({
      open: state[openType],
      onOpenChange: state.onOpenChange,
    })),
  );

  return {
    open: useMemo(() => open, [open]),
    onShow: useCallback(() => {
      onOpenChange({ type: openType, open: true });
    }, [onOpenChange, openType]),
    onHidden: useCallback(() => {
      onOpenChange({ type: openType, open: false });
    }, [onOpenChange, openType]),
    onToggle: useCallback(() => {
      onOpenChange({ type: openType, open: !open });
    }, [onOpenChange, openType, open]),
  };
};
