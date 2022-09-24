import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/Typography';
import Button from '@mui/material/Typography';

const PizzaItem = ({ pizza }) => {
    const dispatch = useDispatch();
    // this is a local state, hitting "back" will reset and change all back to "add" button
    const [toggle, setToggle] = useState(false);

    const addToCart = () => {
        dispatch({ type: 'ADDTO_CART', payload: pizza });
        dispatch({ type: 'UPDATE_TOTAL', payload: parseFloat(pizza.price) });
        setToggle(!toggle);
    };

    const removeFromCart = () => {
        dispatch({ type: 'REMOVE_ITEM', payload: pizza });
        dispatch({ type: 'SUBTRACT_TOTAL', payload: parseFloat(pizza.price) });
        setToggle(!toggle);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card sx={{ borderRadius: '10%' }} elevation={3}>

                <CardMedia
                    component="img"
                    height="140"
                    image={pizza.image_path}
                />

                <CardContent component="div">
                    <Typography variant="h5" gutterBottom >{pizza.name}</Typography>
                    <Typography variant="body1" gutterBottom >{pizza.description}</Typography>
                    <Typography variant="h6" gutterBottom >{pizza.price}</Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'center' }}>
                    {
                        toggle ? (
                            // if toggle = true show "remove" button
                            <Button variant="outlined" color="error" onClick={removeFromCart}>Remove</Button>
                        ) : (
                            // if toggle = false show "add" button
                            <Button variant="outlined" color="success" onClick={addToCart}>Add</Button>
                        )
                    }
                </CardActions>

            </Card>
        </Grid>
    );
};

export default PizzaItem;