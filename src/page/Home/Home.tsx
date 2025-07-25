import { Box, Card, CardContent, Typography,Button } from "@mui/material"
import "./Home.scss"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Box className="home" >
      <Card className="home_card">
            <CardContent className="home_card_content">
                <Typography variant="h4">Student Portal </Typography>
                <Typography >Welcome to the Student Portal. Here you can find all the resources you need for your studies.</Typography>
                <Link to="/student"><Button variant="contained" color="primary" className="home_card_button">
                    Get Started
                    </Button></Link>
            </CardContent>
        </Card>
      <Card className="home_card">
            <CardContent className="home_card_content">
                <Typography variant="h4">Teacher Portal </Typography>
                <Typography >Welcome to the Teacher Portal. Here you can find all the resources you need for your teaching.</Typography>
                <Link to="/teacher"><Button variant="contained" color="primary" className="home_card_button">
                    Get Started
                    </Button></Link>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Home