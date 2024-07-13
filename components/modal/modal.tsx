import type { FC } from "react";

type ModalProps = {
	id: string;
	children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ id, children }) => {
	return (
		<dialog id={id} className="modal">
			<div className="modal-box">{children}</div>
		</dialog>
	);
};

export { Modal };
