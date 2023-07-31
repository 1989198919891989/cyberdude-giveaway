const tbodyEl = document.querySelector('tbody')

if (userObj) {
    const fragment = document.createDocumentFragment()

    db
        .collection(COLLECTION_NAME)
        .get()
        .then((querySnapshot) => {

            let serialNumbaer =1
            querySnapshot.forEach((doc) => {
                const record = doc.data()


                const tr = document.createElement('tr')

                const serialNo = document.createElement('td')
                serialNo.classList.add('p-2', 'border')
                serialNo.textContent = serialNumbaer
                serialNumbaer++ 

                const name = document.createElement('td')
                name.classList.add('p-2', 'border')
                name.textContent = record.fullName

                const communication = document.createElement('td')
                communication.classList.add('p-2', 'border')
                communication.textContent = record.email

                const skills = document.createElement('td')
                skills.classList.add('p-2', 'border')
                skills.textContent = record.skills

                const studies = document.createElement('td')
                studies.classList.add('p-2', 'border')
                studies.textContent = record.studies

                tr.append(serialNo, name, communication, skills, studies)
                fragment.append(tr);

            })
            tbodyEl.append(fragment);

        })
}