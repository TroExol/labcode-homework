import React from 'react';
import { makeStyles, Button, Typography, useTheme, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { StoreDispatchType, StoreType } from '../../store';

import Sandwich from '../Sandwich/Sandwich';
import { deleteOrderAction, deleteIngredientActionType } from '../../store/orders';

const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: '10px',
        },
        title: {
            color: theme.palette.secondary.main,
            marginBottom: '15px',
        },
        orderOutputRoot: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
        },
        orderOutputAmount: {
            marginTop: '10px',
        },
        orderOutputDeleteButton: {
            color: 'red',
            borderColor: 'red',
            marginTop: '10px',
        },
    });
});

interface IProps {
    orders: StoreType['orders'];
    deleteOrder: deleteIngredientActionType;
}

const Orders = (props: IProps) => {
    const classes = useStyles();

    const { orders, deleteOrder } = props;

    const ordersOutput: JSX.Element[] = [];

    if (Object.keys(orders).length > 0) {
        Object.entries(orders).forEach(([key, value]) => {
            const orderOutput = (
                <div key={key} className={classes.orderOutputRoot}>
                    <Sandwich ingredients={value.ingredients} />

                    <Typography
                        className={classes.orderOutputAmount}
                        variant="h6"
                        component="span"
                        color="secondary"
                    >
                        Amount: {value.amount}
                    </Typography>

                    <Button
                        className={classes.orderOutputDeleteButton}
                        variant="outlined"
                        onClick={() => deleteOrder({ orderID: key })}
                    >
                        Удалить заказ
                    </Button>
                </div>
            );

            ordersOutput.push(orderOutput);
        });
    }

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" color="primary">
                Заказы
            </Typography>

            {ordersOutput.length > 0 ? (
                ordersOutput
            ) : (
                <Typography variant="h6" component="span" color="secondary">
                    Нет заказов
                </Typography>
            )}
        </div>
    );
};

const mapStateToProps = (state: StoreType) => {
    return {
        orders: state.orders,
    };
};

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
    return {
        deleteOrder: ({ orderID }: { orderID: string }) => dispatch(deleteOrderAction({ orderID })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
