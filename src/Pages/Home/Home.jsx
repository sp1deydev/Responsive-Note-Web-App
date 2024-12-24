import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import { default as React } from "react";
import { useTranslation } from "react-i18next";

function Home(props) {
    const {t} = useTranslation()
  return (
    <div className="">
      <Typography variant="h4">{t('notes')}</Typography>
      <br></br>
      <div className="home-list-cards">
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className="home-list__card-box" elevation={2}>
          <div className="home-list_card-textbox">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
            esse!
          </div>
          <div className="home-list-card-footer">
            <div className="home-list-card-footer-date">May 28, 2024</div>
            <div className="home-list-card-group-btn">
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <StarOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add"
                sx={{
                  backgroundColor: "#000", // Primary color (or customize it)
                  color: "#fff", // Icon color
                  width: 32, // Adjust size for roundness
                  height: 32,
                  borderRadius: "50%", // Makes it circular
                  "&:hover": {
                    backgroundColor: "#4C585B", // Darker shade on hover
                  },
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
      </div>
      <div className="home-pagination">
        <Pagination count={1} />
      </div>
    </div>
  );
}

export default Home;
