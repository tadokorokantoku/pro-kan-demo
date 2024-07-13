import type { FC } from "react";
import { Modal } from "../modal";
import { ModalTypeMap } from "../types";

export const TestModal: FC = () => {
	return (
		<Modal id={ModalTypeMap.myTest}>
			<h1>Test Modal</h1>
			<div className="modal-action">
				<form method="dialog">
					<button type="submit" className="btn">
						Close
					</button>
				</form>
			</div>
		</Modal>
	);
};
