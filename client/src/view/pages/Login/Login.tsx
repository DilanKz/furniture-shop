import React, {useContext, useState} from "react";
import logo from '../../../assets/img/Essence.png'

import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth, provider} from "./config";
import request from "../../../utils/request";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import UserContext from "../../../context/UserProvider";

const Login = (props:any) => {
    const [modal, setModal] = useState(false);

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('LoginPage must be used within a UserProvider');
    }
    const { setUser } = context;

    const toggleModal = () => props.toggle(!props.open);
    const signIn = async () => {
        await signInWithPopup(auth, provider).then((result) => {

            const user = result.user;
            const userData = {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                image: user.photoURL,
                providerId: user.providerData[0].providerId
            };

            request('POST', 'users/signUp', userData).then(r => {
                console.log(r)
                setUser(r)
                toggleModal()
                // props.user(true)
            })

        }).catch((error) => {
            console.error("Error signing in with Google:", error);
        });
    }

    return (
        <Modal
            isOpen={props.open}
            toggle={toggleModal}
            centered={true}
        >
            <ModalHeader toggle={toggleModal}>
                <img src={logo} loading="lazy" className="w-1/3 " alt="tailus logo"/>
            </ModalHeader>
            <ModalBody>
                <div className="p-4 sm:p-16">
                    <div className="space-y-4">
                        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the best
                            of <br/>Essence.
                        </h2>
                    </div>
                    <div className="grid space-y-4">

                        <button
                            onClick={signIn}
                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                     className="absolute left-0 w-5" alt="google logo"/>
                                <span
                                    className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>

                        {/*<button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span
                                    className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                            </div>
                        </button>*/}

                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                                    className="absolute left-0 w-5" alt="Facebook logo"/>
                                <span
                                    className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                            </div>
                        </button>
                    </div>

                    <div className="mt-20 space-y-4 text-gray-600 text-center sm:-mb-8">
                        <p className="text-xs">By proceeding, you agree to our <a href="#"
                                                                                  className="underline">Terms
                            of Use</a> and confirm you have read our <a href="#" className="underline">Privacy
                            and
                            Cookie Statement</a>.</p>
                        <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#"
                                                                                              className="underline">Google
                            Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
                        </p>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default Login