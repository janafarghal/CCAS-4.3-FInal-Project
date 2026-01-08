const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Travel Agency API Unit Tests', function() {
    // Increase timeout to 10 seconds for cloud database response
    this.timeout(10000); 

    it('should verify the API returns trips from Supabase', async () => {
        const res = await chai.request(server).get('/api/trips');
        
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.success).to.equal(true);
        expect(res.body.data).to.be.an('array');
    });

    it('should verify the API returns bookings from Supabase', async () => {
        const res = await chai.request(server).get('/api/bookings');
        
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.success).to.equal(true);
        expect(res.body.data).to.be.an('array');
    });
});