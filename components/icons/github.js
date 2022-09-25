import { cx } from "@utils/all";

export default function IconGitHub(props) {
    const color = {
        green: "bg-emerald-700",
        blue: "bg-blue-600",
        orange: "bg-orange-700",
        purple: "bg-purple-600",
        pink: "bg-pink-600"
    };

    return (
        <span className="icon social__icon ml-4 flex">
            <svg width="100%" height="100%" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet" name="github"><path fill="currentColor" d="M25 0C11.2 0 0 11.5 0 25.6 0 37 7.2 46.6 17.1 50c1.2.2 1.7-.6 1.7-1.2V44c-7 1.6-8.4-3-8.4-3-1.1-3-2.8-3.8-2.8-3.8-2.3-1.6.2-1.6.2-1.6 2.5.2 3.8 2.6 3.8 2.6 2.2 3.9 5.8 2.8 7.3 2.1.2-1.7.9-2.8 1.6-3.4C14.9 36.3 9 34.1 9 24.3c0-2.8 1-5.1 2.6-6.9-.3-.6-1.1-3.3.2-6.8 0 0 2.1-.7 6.9 2.6 2-.6 4.1-.9 6.3-.9 2.1 0 4.3.3 6.3.9 4.8-3.3 6.9-2.6 6.9-2.6 1.4 3.5.5 6.1.2 6.8 1.6 1.8 2.6 4.1 2.6 6.9 0 9.8-5.8 12-11.4 12.6.9.8 1.7 2.4 1.7 4.7v7c0 .7.4 1.5 1.7 1.2 9.8-3.2 17-12.8 17-24.2C50 11.5 38.8 0 25 0z"></path>
            </svg>
        </span>
    );
}
