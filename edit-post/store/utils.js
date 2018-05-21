/**
 * Given a selector returns a functions that returns the listener only
 * if the returned value from the selector changes.
 *
 * @param  {function} selector       Selector.
 * @param  {function} listener       Listener.
 * @param  {boolean}  executeAtStart true if listener should be executed during the onChangeListener creation.
 * @return {function}                Listener creator.
 */
export const onChangeListener = ( selector, listener, executeAtStart = false ) => {
	let previousValue = selector();
	if ( executeAtStart ) {
		listener( previousValue );
	}
	return () => {
		const selectedValue = selector();
		if ( selectedValue !== previousValue ) {
			previousValue = selectedValue;
			listener( selectedValue );
		}
	};
};
