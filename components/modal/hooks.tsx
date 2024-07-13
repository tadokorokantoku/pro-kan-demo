import { TestModal } from "./modals/TestModal";
import type { ModalType } from "./types";

export const useModal = (id: ModalType) => {
	const modal = id === "my-test" ? TestModal : null;

	const showModal = () => {
		console.log(document.getElementById(id) as HTMLDialogElement);
		(document.getElementById(id) as HTMLDialogElement)?.showModal();
	};

	return { modal, showModal };
};
