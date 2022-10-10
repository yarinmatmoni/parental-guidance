import React, { MutableRefObject, useEffect } from 'react';

export default function useOnclickOutside(
	ref: MutableRefObject<HTMLElement>,
	handler: (value: any) => void
) {
	useEffect(() => {
		const listener: any = (event: React.ChangeEvent<HTMLInputElement>) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
}
