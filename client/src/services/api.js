const URL = "http://localhost:5002";

export async function getAll() {
    try {
        const response = await fetch(URL);

        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getById(id) {
    try {
        const response = await fetch(`${URL}/${id}`);

        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCar(id) {
    try {
        await fetch(`${URL}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
}