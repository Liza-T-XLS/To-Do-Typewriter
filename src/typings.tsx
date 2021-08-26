// export type TList = Array<{
//     id: number,
//     task: string,
// }>

export type TList = Array<ITask>;

export interface ITask {
    id: number,
    desc: string,
};

export interface IRemoveTask {
    (taskId: number): void;
};