// const { sequelize } = require('./models');
// sequelize.sync({ force: true });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoute = require('./routes/auth-route');
const adminRoute = require('./routes/admin-route');
const departureRoute = require('./routes/departure-route');
const reservationRoute = require('./routes/reservation-route');
const bookingRoute = require('./routes/booking-route');
const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');
const authenticateMiddleware = require('./middlewares/authenticate');

const app = express();

app.use(morgan('dev'));
app.use(
    rateLimit({
        windowMs: 1000 * 60 * 15,
        max: 100000,
        message: { message: 'too many request, please try again later' }
    })
);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/departure', authenticateMiddleware, departureRoute);
app.use('/admin', authenticateMiddleware, adminRoute);
app.use('/reservation', authenticateMiddleware, reservationRoute);
app.use('/booking', authenticateMiddleware, bookingRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 2000;
app.listen(port, () =>
    console.log(
        chalk.yellowBright.italic.bold(`server running on port: ${port}`)
    )
);
