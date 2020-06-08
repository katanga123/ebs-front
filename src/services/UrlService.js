import CookieService from './CookieService'
let apiDomain = '';

if (process.env.NODE_ENV === 'production') {
    apiDomain = 'https://laravel-booking-backend.herokuapp.com/';
} else {
    apiDomain = 'http://127.0.0.1:8000/';
}

class UrlService {

    static configAccept() {
        return {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + CookieService.get('access_token')
            }
        }
    }

    static configContentType() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + CookieService.get('access_token')
            }
        }
    }

    // Auth
    static loginUrl() { return apiDomain + 'api/v1/login' }
    static registerUrl() { return apiDomain + 'api/v1/register' }

    // Reservation
    static reservationUrl() { return apiDomain + 'api/v1/reservation' }

    // Status
    static statusUrl() { return apiDomain + 'api/v1/status' }

}

export default UrlService