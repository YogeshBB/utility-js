const max = require('./Max');

describe('max', () => {

    it('Max of the list [1,2,3,4]', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });  
    
    it('Max of the list [4,3,2,1]', () => {
        expect(max([4,3,2,1])).toEqual(4);
    }); 
 
})
