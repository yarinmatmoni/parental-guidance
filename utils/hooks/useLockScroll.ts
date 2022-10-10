import { useEffect } from 'react';
export const useScrollLock = (isLock: boolean) => {
	useEffect(() => {
		if (isLock) {
			document.body.classList.add('sticky');
		} else {
			document.body.classList.remove('sticky');
		}
	}, [isLock]);
};
