var load1 = false;
var load2 = false;
var load3 = false;
const APIKEY = "c7f5d69bf7bb64aa34e077c4325e2020";
const TOKEN = "e52cb18950fdb3e5a423a691ae32366a97c3892c61e3fb56847c4551362ae9d6";
const customField = {
    name: { type: "text", idCustomField: '6345ef00436026043ff0222e' },
    email: { type: "text", idCustomField: '6345ebd4c46bd1033504b1a8' },
    phone: { type: "number", idCustomField: '6345ebdcccbb5c001ec3af27' },
    theme: { type: "text", idCustomField: '6345ee2563a48c04443c468e' },
    matery: { type: "text", idCustomField: '6345ebf5e2a4b004016807cb' },
    carrer: { type: "text", idCustomField: '6345ec03c8d02803663080bd' },
    norm: { type: "text", idCustomField: '6345ec0a1dd67302b402709d' },
    pages: { type: "number", idCustomField: '6345ec11123d6b01f1b90aa7' },
    service: { type: "text", idCustomField: '6345ec1ea2093000852bf757' },
}
export function flag(){
    if (load1&&load2&&load3) {
        return true
    }
}
export async function createCard(name, desc, due, email, phone, theme, matery, carrer, norm, pages, service, idlist, attachment) {
    fetch(`https://api.trello.com/1/cards?idList=${idlist}&key=${APIKEY}&token=${TOKEN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            desc: desc,
            due: due,
        }),
    })
        .then(response => response.json())
        .then((data) => {
            load1=true
            if (!!attachment) {
                attachmentFile(attachment, data.id);
            }
            if (name != '') {
                updateField(customField.name.type, `${service.slice(0, 3)}-${Math.floor(Math.random() * 99999)}`, data.id, customField.name.idCustomField);
            }
            if (email != '') {
                updateField(customField.email.type, email, data.id, customField.email.idCustomField)
            }
            if (phone != '') {
                updateField(customField.phone.type, phone, data.id, customField.phone.idCustomField)
            }
            if (service != '') {
                updateField(customField.service.type, service, data.id, customField.service.idCustomField)
            }
            if (theme != '') {
                updateField(customField.theme.type, theme, data.id, customField.theme.idCustomField)
            }
            if (pages != '') {
                updateField(customField.pages.type, pages, data.id, customField.pages.idCustomField)
            }
            if (norm != '') {
                updateField(customField.norm.type, norm, data.id, customField.norm.idCustomField)
            }
            if (carrer != '') {
                updateField(customField.carrer.type, carrer, data.id, customField.carrer.idCustomField)
            }
            if (matery != '') {
                updateField(customField.matery.type, matery, data.id, customField.matery.idCustomField)
            }
        })
        .catch(err => console.error(err));
        
}

export async function updateField(type, value, idCard, idCustomField) {
    const url = `https://api.trello.com/1/cards/${idCard}/customField/${idCustomField}/item?key=${APIKEY}&token=${TOKEN}`;
    load3=true;
    if (type === "text") {
        const data = { value: { text: value } };
        fetch(url, { body: JSON.stringify(data), method: 'PUT', headers: { 'content-type': 'application/json' } })
            .then(response => response.json())
            .catch(err => console.error(err));

    } else {
        const data = { value: { number: value } };
        fetch(url, { body: JSON.stringify(data), method: 'PUT', headers: { 'content-type': 'application/json' } })
            .then(response => response.json())
            .catch(err => console.error(err));

    }

}

export async function attachmentFile(value, idCard) {
    var formData = new FormData();
    formData.append('file', value);
    fetch(`https://api.trello.com/1/cards/${idCard}/attachments?key=${APIKEY}&token=${TOKEN}`, {
        method: 'POST',
        'content-type': 'multipart/form-data',
        body: formData
    })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then((response) =>{load2=true;console.log('Success:', response)} )
        .catch(err => console.error(err));
}
