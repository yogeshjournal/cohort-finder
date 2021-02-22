import { useEffect, useState } from 'react';
import { Input } from '../Fields/Input';
import swal from 'sweetalert';

export const Popup = (props) => {

    const [isLeadSuccess, setIsLeadSuccess] = useState(false);

    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // call the LEAD API

        const payload = {
            name : values.name,
            email : values.email,
            cohort_name : 'cohort name', // props.cohort.cohort_name
            organisation : 'organisation name', //props.cohort.org
            cohort_id : 'cohort id' // props.cohort id
        }

        console.log(payload);

        setIsLeadSuccess(true);


        // const res = await addCohort(values);
        // if(res){
        //     swal('Upload Success', '', 'success');
        // }else{
        //     swal('Upload Failed', '', 'error');

        // }
    };

    // handle Succe
    useEffect(()=>{
        if(isLeadSuccess){
            props.handleClose();
                        swal('Upload Success', '', 'success');

        }
    }, [props, isLeadSuccess])

    return (
        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    class="fixed inset-0 transition-opacity"
                    aria-hidden="true">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span
                    class="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true">
                    &#8203;
                </span>

                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline">
                    <form onSubmit={(e)=> handleFormSubmit(e)}>
                        <div
                            className="p-2 mr-4 text-right cursor-pointer	"
                            onClick={() => props.handleClose()}>
                            <b> X </b>
                        </div>

                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h2 className="text-center">
                                {' '}
                                Register for Stoa School{' '}
                            </h2>
                            <div class="sm:flex sm:items-start">
                                <Input
                                    label="Name"
                                    name="name"
                                    type="text"
                                    dark={false}
                                    handleChange={handleChange}
                                    value={''}
                                    required={true}
                                />
                            </div>

                            <div class="sm:flex sm:items-start">
                                <Input
                                    label="Email"
                                    name="email"
                                    type="text"
                                    dark={false}
                                    handleChange={handleChange}
                                    value={''}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="submit"
                                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Get Admission Detail
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
