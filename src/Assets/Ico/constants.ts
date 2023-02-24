// 사용할 icon 이름들 (| 구분)
export type iconName = "download";

type icon = {
	path: string;
	viewBox: string;
};

// icon의 path와 viewbox
const IconSet: Record<iconName, icon> = {
	download: {
		path: "M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z",
		viewBox: "0 0 24 24",
	}
};

export { IconSet };