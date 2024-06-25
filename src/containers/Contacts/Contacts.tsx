import React, {useState} from "react";

interface UserForm {
    name: string;
    email: string;
    phone: string;
}

const Contacts = () => {
    const [formdata, setFormData] = useState<UserForm>({
        name: '',
        email: '',
        phone: '',
    });

    const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formdata);

        setFormData({
            name: '',
            email: '',
            phone: '',
        });
    };


    return (
        <>
            <div className="row">
                <h1 className="text-warning my-4">Контакты</h1>
                <p className="fs-4 mb-4">Вы можете связаться с нами следующими способами:</p>
                <ul className="fs-5 ms-5 text-primary">
                    <li className="mb-2">Телефон: +7 (XXX) XXX-XX-XX</li>
                    <li className="mb-2">Email: info@example.com</li>
                    <li className="mb-2">Адрес: улица, город, страна</li>
                </ul>
            </div>
            <div className="row mb-5">
                <h3 className="text-warning mb-5">Также вы можете оставить свою заявку:</h3>
                <div className="row mt-2 justify-content-center">
                    <div className="col-8">
                        <form onSubmit={onFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Ваше имя</label>
                                <input
                                    id="name" type="text" name="name"
                                    className="form-control mb-3 py-2"
                                    value={formdata.name}
                                    onChange={changeUser}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email" type="email" name="email"
                                    className="form-control mb-3 py-2"
                                    value={formdata.email}
                                    onChange={changeUser}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="(000)-222-111"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                    className="form-control mb-3 py-2"
                                    value={formdata.phone}
                                    onChange={changeUser}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-warning text-white px-4 py-2 mb-5">
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;