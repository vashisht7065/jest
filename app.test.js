const removeSName = require('./app')

it('should remove all S names', () => {
    const names = ['Apple', 'Strawberry', 'Star fruit'];
    expect(removeSName(names)).not.toContain('Strawberry')
    expect(removeSName(names)).not.toContain('Star fruit')
});

it('should not remove other names', () => {
    const names = ['PineApple', 'Strawberry', 'Star fruit','Apple'];
    expect(removeSName(names)).toContain('PineApple')
    expect(removeSName(names)).toContain('Apple')
})

it('should mind the case', () => {
    const names = ['Apple', 'Strawberry', 'PineApple', 'strawberry']
    expect(removeSName(names)).not.toContain('Strawberry')
    expect(removeSName(names)).not.toContain('strawberry')
    
})