interface IConfig {
    columns: number;
    rows: number;
    step: number;
    start: number;
}
declare const _default: (config: IConfig) => Array<Number[]>;
/**
 * author: pace_zhong@foxmail.com
 *
 * [二维数组生成器]
 *
 * @param   {IConfig<Number>[]}  config  [二维数组生成配置]
 *
 * @return  {Array<Number>[]}            [生成的二维数组]
 */
export = _default;
