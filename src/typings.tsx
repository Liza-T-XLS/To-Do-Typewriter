// export type TList = Array<{
//     id: number,
//     task: string,
// }>

export type TList = Array<TTask>;

export interface TTask {
    id: number,
    desc: string,
};