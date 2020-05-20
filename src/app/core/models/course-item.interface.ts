
export interface CourseItemInfo {
    id?: string;
    title: string;
    createdAtDate: Date;
    durationTime: number;
    description: string;
    topRated?: boolean;
    authors?: string[];
}
