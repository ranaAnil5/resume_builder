import { Button } from "@chakra-ui/react";

const DownloadButton = ({ handleDownload }: { handleDownload: () => void }) => {
  return (
    <Button mt="30px" mb={"10px"} onClick={handleDownload}>
      Download PDF
    </Button>
  );
};

export default DownloadButton;
