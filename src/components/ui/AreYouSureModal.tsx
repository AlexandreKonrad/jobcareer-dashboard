import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface AreYouSureModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  actionYes?: string;
  actionNo?: string;

}

export function AreYouSureModal({ 
    show, 
    onClose, 
    onConfirm, 
    title = "Deseja realizar essa ação?",
    actionYes = "Sim",
    actionNo = "Não"
}: AreYouSureModalProps){
    return (
        <Modal show={show} size="md" onClose={onClose} popup>
            <ModalHeader />
            <ModalBody>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {title}
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button className="cursor-pointer border-0 focus:outline-none focus:ring-0" color="red" onClick={onConfirm}>
                            {actionYes}
                        </Button>
                        <Button className="cursor-pointer border-0 focus:outline-none focus:ring-0 dark:hover:bg-indigo-900" color="alternative" onClick={onClose}>
                            {actionNo}
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}
