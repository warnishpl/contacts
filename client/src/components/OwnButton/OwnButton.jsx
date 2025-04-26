import { Button } from "./OwnButton.styles..jsx";

export function OwnButton({ onClick, children, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {children && <p>{children}</p>}
    </Button>
  );
}
