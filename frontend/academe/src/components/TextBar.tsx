// TextBar.tsx

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { 
  FaArrowLeft as arrowLeft,
  FaArrowRight as arrowRight,
  FaCheck as check,
  FaSearch as search,
  FaPlus as add,
} from 'react-icons/fa'; // Importando os ícones com apelidos



// Mapeando os apelidos dos ícones
const iconMap = {
  arrowLeft,
  arrowRight,
  check,
  search,
  add,
};

// Definindo as variantes de estilo do input usando cva
const inputVariants = cva(
  "focus:outline-none flex-1", // Estilo base do input
  {
    variants: {
      variant: {
        default: "border-[#E5E7EB] border-sm focus:border-[#006ACB]",
        error: "border-red-500 focus:border-red-600",
        success: "border-green-500 focus:border-green-600",
      },
      textSize: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      textColor: {
        black: "text-black",
        white: "text-[#F0F2F5]",
        gray: "text-[#565656]",
        light_gray: "text-[#94A2B7]",
        blue: "text-[#006ACB]",
        dark_blue: "text-[#003465]",
        light_blue: "text-[#2C9AFF]",
      },
    },
    defaultVariants: {
      variant: 'default',
      textSize: 'md',
      textColor: 'gray',
    },
  }
);



// Definindo as variantes de estilo para o label usando cva
const labelVariants = cva(
  "mb-1 text-left font-medium", // Estilo base do label
  {
    variants: {
      labelSize: {
        sm: "text-sm",
        md: "text-2xl",
        lg: "text-3xl",
      },
      labelColor: {
        black: "text-black",
        white: "text-[F0F2F5]",
        gray: "text-[#565656]",
        light_gray: "text-[#94A2B7]",
        blue: "text-[#006ACB]",
        dark_blue: "text-[#003465]",
        light_blue: "text-[#2C9AFF]",
      },
    },
    defaultVariants: {
      labelSize: 'md',
      labelColor: 'blue',
    },
  }
);

// Definindo as props para o componente TextBar
interface TextBarProps extends
  InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants>,
  VariantProps<typeof labelVariants> {
  label?: string;
  iconLeft?: keyof typeof iconMap;
  iconRight?: keyof typeof iconMap;
  iconColor?: string; // Prop para definir a cor dos ícones
  hideIconsOnInput?: boolean; // Nova prop booleana para ocultar ícones
}

// Criando o componente TextBar
const TextBar = forwardRef<HTMLInputElement, TextBarProps>(
  ({ className, variant, textSize, textColor, labelSize, labelColor, label, iconLeft, iconRight, iconColor = '#E5E7EB', hideIconsOnInput = false, ...props }, ref) => {
    // Estados para gerenciar o foco no input e o valor digitado
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // Manipulador de mudança no input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    // Lógica para determinar se os ícones devem ser exibidos
    const shouldHideIcons = hideIconsOnInput && inputValue.length > 0;

    return (
      <div className="flex flex-col w-full max-w-md">
        {label && <label className={cn(labelVariants({ labelSize, labelColor }))}>{label}</label>}
        <div
          className={cn(
            "flex items-center border rounded-sm transition-colors",
            isFocused ? "border-[#006ACB]" : inputVariants({ variant }).split(' ')[0]
          )}
        >
          {!shouldHideIcons && iconLeft && (
            <div className="mr-2 ml-2 bg-white p-3">
              {iconMap[iconLeft]({ color: iconColor, size: '1.25em' })} {/* Atribuindo a cor e o tamanho */}
            </div>
          )}
          <input
            ref={ref}
            className={cn("p-2", inputVariants({ textSize, textColor, className }))}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleInputChange}
            value={inputValue}
            {...props}
          />
          {!shouldHideIcons && iconRight && (
            <div className="mr-8 ml-2 bg-white p-3">
              {iconMap[iconRight]({ color: iconColor, size: '1.25em' })} {/* Atribuindo a cor e o tamanho */}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextBar.displayName = 'TextBar';

export { TextBar };