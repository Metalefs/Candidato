
export funcion handleError(error) {
	let errorMessage = '';
	if(error.error instanceof ErrorEvent) {
		// Get client-side error
		errorMessage = error.error.message;
	} else {
		// Get server-side error
		errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
	}
	this.StateService.currentState.subscribe(x=>x.Cardapio = false);
	return throwError(errorMessage);
}