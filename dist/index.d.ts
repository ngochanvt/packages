/// <reference types="react" />
interface CountProps {
    label: string;
    initValue?: number;
    onCountUpdate?: () => void | null;
}
declare const Count: ({ label, initValue }: CountProps) => JSX.Element;

export { Count };
