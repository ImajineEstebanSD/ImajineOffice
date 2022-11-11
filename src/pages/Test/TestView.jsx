import { Container } from 'react-bootstrap';

function TestView({ token }) {
    
    return (
        <Container>
            <div className='w-100 h-100' style={{ minHeight: '100vh', backgroundColor: '#afc1de' }}>
                Token : {token}
            </div>
        </Container>
    );
}

export default TestView;
