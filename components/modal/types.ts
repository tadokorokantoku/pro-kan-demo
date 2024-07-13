export const ModalTypeMap = {
	myTest: "my-test",
};

export type ModalType = (typeof ModalTypeMap)[keyof typeof ModalTypeMap];
