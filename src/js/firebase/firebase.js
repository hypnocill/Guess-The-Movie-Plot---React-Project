import firebase from 'firebase';

/**
 * @brief	Initializes firebase credentials
 */
try {
	var config	= {
		//firebase credentials here!!!
	};
	firebase.initializeApp( config );
}
catch( e )
{
	console.log( `Can't connect to database: ${e}` );
}

export let firebaseRef	= firebase.database().ref();
export let FBprovider	= new firebase.auth.FacebookAuthProvider();

export default firebase;
