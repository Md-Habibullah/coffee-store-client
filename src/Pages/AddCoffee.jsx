

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const detail = form.detail.value
        const photo = form.photo.value

        const coffee = { name, quantity, supplier, taste, category, detail, imgUrl: photo }

        fetch('https://coffee-store-server-pi-ten.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="bg-[#f4f3f0] py-24 px-64">
            <h2 className="text-3xl font-extrabold text-black">Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>

                {/* form name & quantity row */}
                <div className="md:flex justify-between">
                    <div className="md:w-[49%] form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Coffee Name</span> <br />
                            <input type="text" placeholder="Coffee Name" name="name" className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="md:w-[49%] form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Available quantity</span> <br />
                            <input type="text" placeholder="Available quantity" name="quantity" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* form supplier & taste row */}
                <div className="md:flex justify-between">
                    <div className="md:w-[49%]  form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Supplier</span> <br />
                            <input type="text" placeholder="supplier" name="supplier" className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="md:w-[49%]  form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Taste</span> <br />
                            <input type="text" placeholder="taste" name="taste" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* form category & detail row */}
                <div className="md:flex justify-between">
                    <div className="md:w-[49%]  form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Category</span> <br />
                            <input type="text" placeholder="category" name="category" className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="md:w-[49%]  form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Detail</span> <br />
                            <input type="text" placeholder="detail" name="detail" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* photo url row */}
                <div className="md:flex">
                    <div className="md:w-full form-control">
                        <label className="label">

                        </label>
                        <label className="input-group">
                            <span>Image URL</span> <br />
                            <input type="text" placeholder="img url" name="photo" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                {/* button */}
                <input className="btn btn-block mt-9 bg-slate-300" type="submit" value="Add Coffee" />

            </form>
        </div>
    );
};

export default AddCoffee;