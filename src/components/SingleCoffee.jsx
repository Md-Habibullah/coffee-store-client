import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCoffee = ({ coffee }) => {
    // eslint-disable-next-line
    const { _id, name, quantity, supplier, taste, category, detail, imgUrl } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-pi-ten.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-[150px] h-[150px]' src={coffee.imgUrl} alt="coffee" /></figure>
                <div className='flex justify-between items-center w-full pr-4'>
                    <div className='ml-4'>
                        <h2 className='flex flex-col card-title'>Name: {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <div className="space-y-4 space-x-2">
                            <button className='btn'>View</button>
                            <Link to={`/updateCoffee/${_id}`}><button className='btn'>Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className='btn bg-orange-500'>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleCoffee.propTypes = {
    coffee: PropTypes.object
};

export default SingleCoffee;