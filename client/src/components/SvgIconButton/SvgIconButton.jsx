import { Button } from "./SvgIconButton.styles";

export function SvgIconButton({ onClick, svg, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {svg}
    </Button>
  );
}
