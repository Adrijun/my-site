import React from 'react';
import { Button } from 'react-bootstrap';
interface OpenInNewWindowProps {
  link: string;
  buttonText: string;
}
function OpenInNewWindow({ link, buttonText }: OpenInNewWindowProps) {
  const openNewWindow = () => {
    window.open(link, '_blank');
  };

  return (
    <Button
      className="BtnLink mt-3"
      onClick={openNewWindow}
      variant="outline-light m-1"
    >
      {buttonText}
    </Button>
  );
}
export default OpenInNewWindow;
