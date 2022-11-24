import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function MoviePopup({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBody>
        <Card>
          <CardBody>
            <Text fontSize={"medium"}>This is Card</Text>
          </CardBody>
        </Card>
      </ModalBody>
    </Modal>
  );
}
