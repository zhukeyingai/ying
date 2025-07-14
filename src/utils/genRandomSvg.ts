import Chance from 'chance';

type Options = {
  size: number;
  lines: number;
  circles: number;
  triangles: number;
  opacity: number;
  background: string;
};

const chance = new Chance() as Chance.Chance & {
  svg: (opts?: Partial<Options>) => string;
};

// Generate a svg randomly
chance.mixin({
  // 使用 mixin 添加自定义 SVG 方法
  svg(
    options = {
      size: 40,
      lines: 20,
      circles: 10,
      triangles: 10,
      opacity: 0.3,
      background: chance.color(),
    },
  ) {
    // 辅助函数 point —— 随机坐标点生成器
    function point(min = -50, max = 150) {
      return chance.integer({
        min,
        max,
      });
    }

    // 拼接 SVG 字符串（构建 SVG 元素）
    let svg = '<svg version="1.1" viewBox="0 0 24 24"';
    svg += 'xmlns="http://www.w3.org/2000/svg"';
    svg += 'style="background-color:' + options.background + '">';

    // 生成线条 <line>
    for (let i = 0; i < options.lines; i++) {
      svg += '<line stroke="' + chance.color() + '" ';
      svg += 'stroke-width="' + point(1, 5) + '" ';
      svg += 'opacity="' + options.opacity + '" ';
      svg += 'x1="' + point() + '" y1="' + point() + '" ';
      svg += 'x2="' + point() + '" y2="' + point() + '" />';
    }

    // 生成圆形 <circle>
    for (let i = 0; i < options.circles; i++) {
      svg += '<circle cx="' + point() + '" ';
      svg += 'cy="' + point() + '" ';
      svg += 'r="' + point(1, options.size / 2) + '" ';
      svg += 'opacity="' + options.opacity + '" ';
      svg += 'fill="' + chance.color() + '"/>';
    }

    // 生成三角形 <polygon>
    for (let i = 0; i < options.triangles; i++) {
      const s = options.size;
      svg += '<polygon fill="' + chance.color() + '" points="';
      svg += point() + ',' + point() + ' ';
      svg += point(-s, s) + ',' + point(-s, s) + ' ';
      svg += point(-s, s) + ',' + point(-s, s);
      svg += '" opacity="' + options.opacity + '" ';
      svg += 'fill="' + chance.color() + '"/>';
    }

    return svg + '</svg>';
  },
});

export const genRandomSvg = (options?: Partial<Options>) => {
  return chance.svg(options);
};
