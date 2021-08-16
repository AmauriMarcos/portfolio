import { useMediaQuery } from "react-responsive";

export const mediaQuery = () => {
    return  md = useMediaQuery({ query: "(max-width: 768px)" });
}
