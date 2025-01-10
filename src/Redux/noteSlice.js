import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const noteSlice = createSlice({
    name: 'note',
    initialState: [
        {
            id: '1',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur consectetur enim eius incidunt quo harum quam
            cupiditate cum, voluptatibus maxime doloremque. Modi, cupiditate
            dolorum? Rem aliquid quas eligendi mollitia cum, tempora,
            perspiciatis, saepe at natus tenetur rerum minus suscipit. Libero
            animi accusamus non eaque esse doloribus! Aliquam eligendi provident
            odio velit, fuga eos vero amet in, est, eum obcaecati perspiciatis
            non! Voluptates adipisci nesciunt recusandae ad repudiandae rem qui
            sit, vitae quam dignissimos exercitationem placeat facilis facere
            unde odio nemo aut dolorum tenetur quisquam aliquid iure possimus
            enim expedita? Quidem, modi obcaecati suscipit, velit error porro
            eligendi illo molestiae incidunt facere maiores numquam minima
            doloribus ipsa ullam facilis magni! Nisi, doloremque, autem deserunt
            atque, reiciendis delectus error incidunt nam sed dolores
            consectetur. Autem vitae non accusamus, adipisci impedit ab iusto
            qui sed velit! Ipsam sit exercitationem molestias deleniti repellat
            incidunt enim in. Labore aperiam magnam velit consequatur atque at
            dolores error quibusdam maiores? Fugiat, quos vel beatae repellendus
            neque tempora. Unde quisquam ipsam ullam modi! Laudantium,
            necessitatibus veritatis reprehenderit quisquam aperiam,
            repudiandae, qui distinctio sequi eaque aliquid ipsam amet ipsa
            sint! Fugit animi eum quas ea harum perspiciatis et odio iusto
            dolorum. Adipisci quod impedit corrupti aspernatur magni inventore
            esse!`,
            date: 'May 13, 2024',
            isEdit: false,
            isMarked: true,
        },
    ],
    reducers: {
        add: (state, action) => {
            const newNote = {
                id: uuidv4(),
                content: action.payload,
                date: 'May 13, 2024',
                isMarked: true,
            }
            state.push(newNote);
        },
        edit: (state, action) => {
            const {id, content} = action.payload;
            const index = state.findIndex(note => note.id === id)
            state[index].content = content;
        },
        delete: (state, action) => {

        },
        toggleMark: (state, action) => {

        },
    },
})