// export type TList = Array<{
//     id: number,
//     task: string,
// }>

export type TList = Array<ITask>;

export interface ITask {
    id: number,
    desc: string,
    active: boolean,
};

export interface ITaskManager {
    (taskId: number): void;
};