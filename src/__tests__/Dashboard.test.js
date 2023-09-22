import { render, screen, getByPlaceholderText, queryByText } from '@testing-library/react';
import FlagsDashboard from '../components/Dashboard';

// El componente renderiza sin errores?
describe("FlagsDashboard", () => {
    test("Renderiza el componente sin problema", () => {
        render(<FlagsDashboard />);
    });
});