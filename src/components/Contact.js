

const Contact = () => {
    return (
        <div id="contact-us">
            <h1 className="m-4 p-4 font-bold text-2xl">Contact us!!!</h1>
            <form>
                <input className="border border-black m-4 p-2 rounded" placeholder="name"/>
                <input className="border border-black m-4 p-2 rounded" placeholder="message"/>
                <button className="m-4 px-4 py-2 bg-gray-800 text-white rounded">Submit</button>
            </form>
        </div>
    );
};

export default Contact;