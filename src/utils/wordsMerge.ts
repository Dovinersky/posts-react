export const wordsMerge = (
    classes1: string | undefined | null,
    classes2: string | undefined | null
): string => {
    classes1 = classes1?.trim();
    classes2 = classes2?.trim();
    if (classes1 && classes2) return classes1 + " " + classes2;
    if (classes1) return classes1;
    if (classes2) return classes2;
    return "";
};
export default wordsMerge;
