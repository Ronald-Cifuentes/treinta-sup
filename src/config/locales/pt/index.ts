/* eslint-disable max-lines */
import {StoreTypeKeys} from 'config/constants';

export const pt = {
  commons: {
    spaces:
      'Certifique-se de remover quaisquer espaços vazios no início ou no final.',
    supplier: 'Fornecedor',
    client: 'Cliente',
    sale: 'Venda',
    spending: 'Gasto',
    date: 'Data',
    total: 'Total',
    contact: 'Contato',
    paymentMethod: 'Método de pagamento',
    totalProducts: 'Produtos totais',
    cash: 'Dinheiro',
    card: 'Cartão',
    edit: 'Editar',
    delete: 'Eliminar',
    'bank-transfer': 'Transferência',
    other: 'Outro',
    debt: 'Débito',
    'payment-link': 'Link de pagamento',
    add: 'Adicionar',
    update: 'Atualizar',
    value: 'Valor',
    paid: 'Paga',
    due: 'Dívida',
    save: 'Salvar alterações',
    'show-all': 'Ver todos',
    'concept-sale': 'Você quer dar um nome a esta venda?',
    'concept-sale-placeHolder': 'Escreva-o aqui',
    'concept-spending': 'Você quer dar um nome a esta despesa?',
    'concept-spending-placeHolder': 'Dê um nome a esta despesa',
    'help-concept': '<p>Aqui você pode colocar o conceito de suas vendas</p>',
    'total-value': 'Valor total',
    transaction: 'transação',
    transactions: 'transações',
    available: 'Disponível',
    'upload-image': 'Carregar imagem',
    'upload-logo': 'Carregar logo',
    'search-product': 'Buscar produtos...',
    'yes-continue': 'Sim, continuar',
    'go-back': 'Voltar',
    'download-report': 'Baixar relatório de',
    'in-excel': 'em Excel',
    'in-pdf': 'em PDF',
    'report-of': 'Relatório de',
    'no-results-found': 'Nenhum resultado encontrado',
    profit: 'Lucro',
    availables: 'Disponíveis',
    'write-here': 'Escreva-o aqui',
    optional: 'opcional',
    'free-sale': 'Venda livre',
    'new-product': 'Novo produto',
    'generic-error': 'Ocorreu um problema!',
    'error-create': 'Ocorreu um problema ao criar {{{entity}}!',
    'error-delete': 'Ocorreu um problema ao apagar {{{entity}}!',
    'error-update': 'Ocorreu um problema durante a edição {{{entity}}!',
    'error-read': 'Ocorreu um problema ao consultar {{{entity}}!',
    'the-product': 'o produto',
    'the-transaction': 'a transação',
    'the-category': 'a categoria',
    'the-contact': 'o contato',
    records: 'os registros',
    understood: 'Entendido',
    'show-aditional-information': 'Agregar informação adicional',
    'hidden-aditional-information': 'Ocultar informação adicional',
    'email-error-message': 'O email não é válido',
    'required-text':
      'Os campos marcados com um asterisco (<requiredIndicator>*</requiredIndicator>) são obrigatórios.',
  },
  login: {
    'sign-in-helper': 'Se você já usa Trinta:',
    'sign-in': 'Acessar',
    'sign-up-helper': 'Se esta é sua primeira vez usando Trinta:',
    'sign-up': 'Crie a sua conta aqui',
    'sign-in-user-not-found':
      'Oi! Este número de celular não está cadastrado na Trinta. Cadastre-o e tente acessar com o seu e-mail',
  },
  logout: {
    'logout-alert': 'Você quer sair do app?',
    yes: 'Sim',
    'go-back': 'Voltar',
  },
  'sign-up-phone': {
    alert:
      'Se você já se <bold>vinculou a um negócio como empregado</bold>, insira seus dados e acesse normalmente.',
    title: 'Cadastre-se com seu celular',
    subtitle:
      'Nós lhe enviaremos um código de verificação por <bold>mensagem do WhatsApp</bold>',
    'invalid-account':
      'Seu e-mail não está registrado na Trinta. Por favor, acesse com o seu número de celular para começar o cadastro.',
    terms: 'Li e aceito os',
    'terms-link': 'Termos e condições e políticas de dados.',
    'sign-in-question': 'Você já tem uma conta?',
    'user-already-exists':
      'O seu número de celular já está cadastrado na Trinta. Por favor acesse novamente.',
    'write-phone': 'Escreva seu número',
    'step-number': 'Tu número',
    'step-validation': 'Verificación',
    'step-business': 'Tu negocio',
    account: 'Cuenta',
    'free-100': '100% GRATIS',
    'list-item-one': 'Administrar la contabilidad de tu negocio.',
    'list-item-two':
      'Cargar fácilmente todo tu inventario y llevar un control de tu stock.',
    'list-item-three': 'Gestionar tus clientes y proveedores.',
    'treinta-features': 'Al regístrarte en Treinta podrás:',
  },
  'auth-otp': {
    alert: 'Aguarde a mensagem. Pode demorar alguns instantes',
    'invalid-user': 'Aguarde a mensagem. Pode demorar alguns instantes',
    attempts: 'Você tem {{alertReset}} 6 tentativas.',
    'no-attempts':
      'Você não tem mais tentativas. Por favor entre em contato com o suporte.',
    title: 'Código de verificação',
    subtitle: 'Acesse o código de verificação que enviamos a seu celular',
    'count-down': 'Solicitar um novo código',
    'resend-code': 'Enviar novamente o código',
    'receiving-call': 'Receber chamada',
    minute: 'minuto',
    and: 'e',
    seconds: 'segundos',
  },
  'sign-in-phone': {
    title: 'Acesse com o número do seu celular',
    'sign-in': 'Acessar',
    alert:
      '<bold>Faça o login com o mesmo e-mail ou número de celular</bold> que você usou para se registrar na Trinta.',
  },
  'sign-in-google': {
    title: 'Acesse com o Google',
    phone: 'Acesse com seu número de celular',
    question: 'Ainda não tem conta?',
  },
  errors: {
    'invalid-otp':
      'O código é inválido. Por favor, tente novamente ou solicite um novo',
    'invalid-phone':
      'Seu número de celular não é válido. Por favor, verifique uma última vez antes de enviar.',
    generic: 'Occorreu um erro. Tente mais tarde.',
    'blocked-by-attempts': 'Já não tem mais tentativas',
    'not-found': 'Desculpa, não encontramos a página que você está procurando.',
    'not-found-page': 'Página não encontrada',
    'attempts-error':
      'Há um problema com o seu celular. <bold>Por favor clique aqui para entrar em contato com o suporte.</bold>',
  },
  'welcome-view': {
    'slide-1-primary-text': 'Carregue todo o seu estoque de uma só vez',
    'slide-1-secondary-text':
      'Use nossa planilha do Excel para carregar rapidamente seu inventário.',
    'slide-2-primary-text': '100% grátis',
    'slide-2-secondary-text':
      'Use nosso aplicativo e nossa versão para PC sem pagar um centavo.',
    'slide-3-primary-text': 'Lance suas vendas em segundos',
    'slide-3-secondary-text':
      'Registre vendas em tempo real e controle os clientes devedores.',
    'slide-4-primary-text': 'Sincronizado em todos os seus dispositivos',
    'slide-4-secondary-text': 'Use Trinta no seu celular ou PC',
    question: 'Você já tem uma conta?',
    security: '100% segura e gratuita',
  },
  'product-form': {
    'no-category': 'Sem categoria',
    'add-title': 'Adicionar produto',
    'edit-title': 'Editar produto',
    'delete-title': 'Eliminar produto',
    'add-submit': 'Criar produto',
    'edit-submit': 'Salvar alterações',
    'top-subtitle': 'Os espaços marcados com asterisco (*) são obrigatórios',
    'delete-product': 'O produto foi eliminado!',
    'not-delete-product':
      '<s>Não foi possível eliminar este produto, </s> <b> já que está atribuído a {{transaction_count}} {{transaction}}</b>',
    fields: {
      name: 'Nome do produto*',
      'name-placeholder': 'Escreva o nome do produto',
      photo: 'Fotos do produto',
      'photo-placeholder': 'Subir fotos',
      'bar-code': 'Código de barras',
      'bar-code-subtitle': 'Você pode escrever ou escanear.',
      'bar-code-placeholder': 'Coloque o código de barras do produto',
      quantity: 'Quantidade disponível*',
      'quantity-subtitle': 'Selecione a quantidade disponível do seu produto',
      cost: 'Custo',
      'unit-cost': 'Custo unitário',
      price: 'Preço*',
      category: 'Categoria',
      description: 'Descrição',
    },
  },
  orders: {
    title: 'Gestiona tus órdenes',
    table: {
      rowsPerPage: 'Filas por página:',
    },
    changestates: {
      'initial-state-dropdown': 'Alterar status',
      'qty-selected': 'Selecionado',
    },
    'input-search-placeholder': 'Buscar por nombre, categoría, SKU...',
  },
  onboarding: {
    'title-name': 'Qual é o seu nome? ',
    'placeholder-name': 'Escreva seu nome',
    'title-store': 'Qual é o nome do seu negócio?',
    'placeholder-store': 'Escreva o nome do seu negócio',
    'title-categories': 'Qual é a categoria do seu negócio?',
    'placeholder-categories': 'Escolha uma categoria',
    'button-next': 'Seguinte',
    'button-finalize': 'Finalizar',
    'name-required': 'Espaço requerido, por favor escreva seu nome',
    'store-required':
      'Espaço requerido, por favor escreva o nome do seu negócio',
    'field-max-lenght':
      'Você ultrapassou os 150 dígitos permitidos neste espaço',
  },
  'left-menu': {
    'edit-business': 'Editar negócio',
    'add-business': 'Adicionar outro negócio',
    balance: 'Balanço',
    debts: 'Dívidas',
    inventory: 'Inventário',
    delivery: 'Envios',
    'manage-contacts': 'Administre seus grupos',
    'extra-income': 'Rendimentos extras',
    clients: 'Clientes',
    soon: 'Em Breve',
    suppliers: 'Fornecedores',
    profile: 'Perfil',
    help: 'Ajuda',
    share: 'Compartilhar com amigos',
    communities: 'Faça parte da nossa comunidade',
    terms: 'Termos e condições e Política de privacidade',
    support: 'Precisa de ajuda do nosso suporte? Fale conosco por aqui!',
    logout: 'Encerrar Sessão',
    toolTip: {
      debts:
        'Agora você pode registrar as suas dívidas desde sua APP da Trinta',
      clients: 'Agora você pode gerir seus clientes desde sua APP da Trinta',
      providers:
        'No momento você pode administrar seus fornecedores a partir de seu Trinta APP',
    },
    manageContacts: 'Gerencie seus contatos',
  },
  'bulk-upload': {
    'field-min-length': 'O valor deve ser maior a 0.',
    required: 'Campo obrigatório',
    'edit-submit': 'Guardar e continuar',
    'edit-title': 'Editar produto',
    'duplicate-name':
      'Você já tem um produto com este nome. Você pode criar um novo.',
    'duplicate-sku':
      'Você já tem um producto com este código. Tenta novamente.',
    'update-excel-message':
      'Se você não quiser adicionar as novas categorias, por favor, atualize seu documento Excel e recarregue o arquivo.',
    'lot-products':
      'Você tem muitos productos para carregar no seu inventário?',
    'learn-upload': 'Aprenda a carregar automaticamente com nosso modelo',
    'show-guide': 'Ver guia',
    'product-repeated-message':
      'O que você quer fazer com os produtos {{productsRepeated}} duplicados?',
    'revision-inventory': 'Revisão de inventário',
    'load-images': 'Cargar imágenes',
    'upload-inventory': 'Carregue o inventário',
    'replace-all': 'Substituir tudo',
    'replace-message':
      'Será susbtituida a informação do produto (quantidades, custos, preços etc) que você tem na Trinta com a informação do Excel.',
    'add-quantity-stock': 'Somar a quantidade do estoque',
    'keep-message':
      'Será mantida a informação do produto (cistos, preços, categoria etc) e serão adicionados às quantidades do Excel no inventário atual.',
    'step-upload': 'Passos para carregar o seu inventário',
    'upload-inventory-excel': 'Carregar o inventário desde o Excel',
    tutorial: {
      title: 'Etapas para carregar seu inventário',
      'message-one': 'Baixe seu modelo de Trinta.',
      'message-two': 'Preencha seu modelo seguindo as instruções no Excel.',
      'message-three':
        'Faça o upload de seu arquivo Excel completo e clique em Continuar para revisá-lo.',
      'message-four': 'Verifique seus produtos e adicione fotos, se desejar.',
      'message-five':
        'Se forem detectados erros, corrigi-los para finalizá-los.',
      'message-six': 'Confirme o upload e pronto!',
      understood: 'Entendido',
    },
    'next-step': 'Você gostaria de ir ao seguinte passo?',
    'replace-product':
      'Susbtituindo a informação de seus produtos existentes na Trinta registrados no arquivo de excel',
    'add-stock-quantity':
      ' Adicionaremos a quantidade  de estoque que está no seu arquivo de Excel no seu inventártio da Trinta. ',
    'drag-file': 'Arraste seu arquivo aqui',
    'select-from-computer': 'selecione desde seu computador',
    'file-upload-success': 'Seu arquivo carregou corretamente',
    'product-already-upload':
      'Você está carregando produtos que estão registrados na Trinta',
    'inventory-update-message':
      'Seu inventário atualizará a informação dos produtos que você registrou no arquivo.',
    'register-data-file': 'Registre os dados no seu arquivo do inventário',
    'download-template-one':
      'Descarregue o modelo para registrar seu inventário e carregue completamente',
    'download-template': 'Descarregar modelo',
    'upload-file': 'Carregue o arquivo com seu inventário',
    'excel-instructions':
      'Siga as instruções que encontrará no Excel para subir seu inventário sem problemas.',
    'product-already-upload-amount':
      'Você está carregando {{productsRepeated}} produtos que você já tem registrados na Trinta',
    'format-allowed': 'Formato permitido: Excel (XLSX) | Peso máximo 15MB',
    'new-categories-detect': 'Percebemos que há novas categorias',
    'add-catregory-resume':
      'Adicionaremos as seguintes categorias a seu inventário:',
    'upload-inventory-success':
      'Você concluiu o processo! Seu arquivo de inventário foi carregado com sucesso. Agora você tem:',
    'product-upload': 'Produtos carregados:',
    'total-products': 'Total produtos',
    'categories-upload': 'Categorias carregadas:',
    'total-categories': 'Total de categorias',
    'cost-upload': 'Custo dos produtos carregados:',
    'total-cost': 'Custo total',
    'value-upload': 'Valor dos produtos carregados:',
    'total-value': 'Valor total',
    'continue-revision': 'Continuar a revisão',
    'show-inventory': 'Ver inventário',
    'found-total': 'Foram encontrados um total de',
    errors: 'erros:',
    'required-fields-empty': 'Alguns campos obrigatórios estão vazios.',
    'fields-invalid':
      'Há campos preenchidos incorretamente ou com formatação inválida.',
    'dont-have-errors': 'Ótimo! Não encontramos erros.',
    'continue-without-fix': 'Continuar sem corrigir',
    'confirm-products': 'Confirmar produtos',
    'continue-with-errors': 'Você gostaria de continuar sem corrigir os erros?',
    'warning-product-errors':
      'Os produtos com erros não serão carregados no seu inventário.',
    'select-product': 'Você pode selecionar os produtos da lista para:',
    'add-image': 'Adicionar fotos do seus produtos.',
    'check-errors': 'Revisar e corrigir erros nos produtos',
    'file-inventory-correted': 'Arquivo de inventário corrigido',
    'file-inventory-message':
      'Agora que você corrigiu os erros em seu arquivo, não se esqueça de ter sempre à mão seu inventário corrigido e atualizado.',
    'file-corrected-download': 'Baixar com correções',
    'inventory-download-succes':
      'Seu inventário atualizado foi baixado com sucesso',
    'inventory-download-waiting':
      'Seu inventário está sendo preparado para download',
    'save-error': 'Ocorreu um problema durante a criação dos produtos!',
    'error-invalid-format':
      'Arquivo inválido. verifique se seu arquivo está no formato XLSX e tente carregá-lo novamente em seu inventário',
    'error-upload-file':
      'Não foi possível enviar seu arquivo. Por favor, tente novamente.',
    'error-file-bigger':
      'Arquivo inválido. verifique se seu arquivo não é maior que 15 MB.',
    'error-without-products':
      'Arquivo inválido. Verifique se seu arquivo contém pelo menos um produto.',
    'error-products-repeated':
      'Arquivo inválido. verifique se seu arquivo não contém elementos duplicados.',
    'button-go-back': 'Carregar inventário do Excel',
  },
  'category-form': {
    name: 'Nome da categoria*',
    'name-placeholder': 'Escreva o nome da categoria',
    'available-text': 'disponíveis',
    'empty-product': 'Você não tem produtos nesta categoria',
  },
  'balance-new-sale': {
    basket: 'Cesta',
    'new-sale': 'Nova venda',
    'empty-basket': 'Cesta vazia',
    'confirm-products': 'Confirmar produtos',
    'reference-quantities': 'Quantidades de referência',
    'profit-tooltip':
      'Para calcular o lucro corretamente, você precisará inserir o custo unitário de todos os produtos de seu inventário.',
    'empty-state':
      'Você ainda não tem produtos em sua cesta. Clique em um produto para adicioná-lo.',
    'no-products-for-category': 'Não há produtos nesta categoria',
    'no-products-for-search':
      'Não foram encontrados resultados para <bold>"{{{search}}"<bold/>',
    'available-text': 'disponíveis',
    'button-new-product-label': 'Novo produto',
    'confirmation-title': 'Confirmação de venda',
    'confirmation-required-text':
      'Os campos marcados com um asterisco (<requiredIndicator>*</requiredIndicator>) são obrigatórios.',
    'confirmation-date': 'Data da venda',
    'confirmation-payment-method':
      'Selecione a forma de pagamento<requiredIndicator>*</requiredIndicator>',
    'confirmation-client-label':
      'Adicionar um cliente à venda <optionalText>(opcional)</optionalText>.',
    'confirmation-client-placeholder':
      'Procurar um cliente ou registrar um novo...',
    'confirmation-new-client': 'Registrar um novo cliente',
    'confirmation-confirm-sale': 'Confirmar venda',
    'successful-sale-title': 'Você criou uma venda!',
    'successful-sale-balance-text':
      'Foi registrada no seu balanço por um valor de <bold>{{balance}}</bold>.',
    'successful-sale-description-label': 'Você quer dar um nome a esta venda?',
    'successful-sale-description-placeholder': 'Escreva-o aqui (opcional)',
    'successful-sale-receipt-title': 'Comprovante',
    'successful-sale-receipt-text': 'Você pode baixar o recibo de venda.',
    'successful-sale-receipt-button': 'Baixe o comprovante',
    'successful-sale-receipt-downloading': 'Baixando o comprovante',
    'successful-sale-new-sale': 'Nova venda',
    'successful-sale-go-to-balance': 'Ir para o balanço',
    'select-payment': 'Selecione sua forma de pagamento',
    'sale-name': 'Você quer dar um nome a esta venda?',
    'add-client': 'Adicionar um cliente à venda',
    'add-cliente-placeholder': 'Procurar um cliente ou registrar um novo...',
    'empty-clients-search': 'Você ainda não tem clientes adicionados',
    'empty-suppliers-search': 'Aún no tienes proveedores creados',
    'discover-the-new-sale':
      'Descubra a nova forma rápida e simples de registrar vendas na Trinta Web',
  },
  balance: {
    'load-product': 'Carregando produtos...',
    'search-products-message':
      'Nenhum resultado foi encontrado para "{{{valueSearch}}" por favor tente uma busca diferente',
    'search-contact': 'Procurar contato...',
    'select-provider': 'Selecionar fornecedores',
    'search-provider': 'Buscar fornecedor...',
    'search-client': 'Buscar cliente...',
    'client-created': 'O cliente foi criado!',
    'admin-sas': 'Administradora SAS',
    'sale-success': 'Sua venda foi criada com sucesso!',
    'spending-success': 'Seu gasto foi criado com sucesso!',
    'transaction-error': 'Ocorreu um problema com a transação',
    'transaction-deleted': 'A transação foi excluída com sucesso!',
    'transaction-update-success': 'A transação foi atualizada com sucesso',
    'product-selected': 'produto selecionado',
    'products-selected': 'produtos selecionados',
    'create-sale': 'Criar venda',
    'edit-spending': 'Editar gasto',
    'create-spending': 'Criar gasto',
    'edit-sale': 'Editar gasto',
    'total-sales': 'Vendas totais',
    'total-spendings': 'Gastos totais',
    'field-required-one': 'Os espaços marcados com asterisco',
    'field-required-two': 'são obrigatórios',
    'date-sale': 'Data da venda',
    'date-spending': 'Data do gasto',
    'products-sell': 'Produtos vendidos',
    'products-bought': 'Produtos comprados',
    'select-products': 'Selecionar produtos',
    'enter-transaction-name': 'Coloque o nome da transação',
    'load-transactions': 'Carregando transações...',
    'download-receipt': 'Baixar recibo',
    'download-success': 'Download com sucesso',
    'download-error': 'Erro no download',
    'download-loading': 'Seu relatório está sendo preparado para download',
    'total-utility': 'Lucro total',
    'download-text':
      'Será descarregado o relatório de acordo com os filtros e datas colocadas no balanço',
    'tooltip-utility-message':
      'Estes são os ganhos do seu negócio que correspondem às vendas registradas, menos os gastos.',
    'tooltip-sales-message':
      'Este é o valor total das vendas registradas no seu negócio.',
    'tooltip-spending-message':
      'Este é o valor total dos gastos e pagamentos registrados do seu negócio.',
    'new-spend': 'Novo gasto',
    'dropdown-sale-title': 'Venda de produtos',
    'dropdown-sale-subtitle':
      'Registre uma venda selecionando produtos do seu inventário.',
    'dropdown-free-sale-subitle':
      'Registre uma venda sem selecionar produtos do seu inventário.',
    'error-load-detail':
      'Ocorreu um problema ao visualizar os detalhes da transação',
    'write-here': 'Escreva aquí',
    'select-category': 'Selecciona una categoría',
    'expense-category': 'Categoria do gasto',
    'public-services': 'Serviços públicos',
    'purchase-products': 'Compra de produtos e insumos',
    rent: 'Aluguel',
    payroll: 'Folha de pagamento',
    'administrative-expenses': 'Gastos administrativos',
    'marketing-advertising': 'Marketing e publicidade',
    'trasport-logistic': 'Transporte, domicílios e logística',
    'maintenance-repairs': 'Manutenções e reparos',
    'forniture-equipment': 'Móveis, equipamentos e máquinas',
    others: 'Outros',
    'purchase-products-alert':
      '<b>Adicionaremos os produtos selecionados no seu inventário automaticamente, ao criar o gasto.',
    'add-purchase-products-alert':
      'Agrega las cantidades que quieres <b>sumar a tu inventario.</b>',
    'add-to-spend': 'Agregar al gasto',
    'unit-cost': 'Costo unitario',
    'purchase-products-walkthrough':
      'Aquí puedes seleccionar tus productos y <b>sumar las cantidades que quieras agregar a tu inventario.</b>',
    'payroll-alert':
      'Você poderá baixar o <b>comprovante </b> de pagamento dos seus empregados em <b>“Detalhe do Gasto”.</b>',
    'spend-category-walkthrough-title':
      '<b>Agora você poderá atribuir uma categoria às suas despesas</b>',
    'spend-category-walkthrough-description':
      'Por exemplo: serviços públicos, salários ou aluguel',
    'want-to-delete-transaction': 'Você quer eliminar esta transação?',
    'text-confirm-delete':
      'Depois de eliminá-la, você não poderá recuperar a informação registrada.',
    'available-text': 'disponíveis',
    'transaction-summary-subtitle': 'Transação',
    'add-products-title': 'Adicionar produtos',
    'edit-products-title': 'Editar produtos',
    'product-singular': 'produto',
    'product-plural': 'produtos',
  },
  inventory: {
    title: 'Inventário',
    'product-error': 'Ocorreu um problema com o produto',
    'add-manual': 'Adicionar produtos manualmente',
    'download-report': 'Baixar relatórios',
    'need-upload-product-message':
      'Você precisa carregar os produtos no seu inventário para poder descarregar o relatório',
    'upload-excel': 'Carregar os produtos desde o Excel',
    'see-all-categories': 'Ver todas as categorias',
    'edit-categories': 'Editar categorias',
    'edit-category': 'Editar categoria',
    'add-product-here': 'Aqui você pode adicionar produtos',
    'upload-product-message':
      'Registra um produto manualmente ou carrega massivamente coom um arquivo de Excel',
    'create-category': 'Criar categoria',
    'category-error-duplicate': 'Já existe uma categoria com o mesmo nome.',
    'category-succes': 'A categoria foi criada!',
    'create-a-new-category': 'Criar uma nova categoria',
    'add-products': 'Adicionar produtos  ',
    'product-resume': 'Resumo do produto',
    'product-image': 'Imagem do produto',
    'available-text': 'disponíveis',
    'empty-inventory-message': 'Você não tem produtos no seu inventário',
    'delete-warning-message':
      'Assim que eliminar o produto não poderá recuperar a informação que foi registrada.',
    'want-to-delete-product': 'Você quer eliminar este produto?',
    'want-to-delete-category': 'Você quer eliminar esta categoria?',
    'remember-three-characters':
      'Inclua pelo menos 3 caracteres para iniciar a busca ',
    'total-references-inventory':
      'Este é o total de referências de produtos que há no seu inventário.',
    'total-references': 'Total de referências',
    'total-value-inventory':
      'Este é o total investido adquirindo o seu inventário.',
    'total-cost-inventory': 'Custo total do inventário',
    'category-created': 'Foi criada uma categoria',
    'category-error': 'Ocorreu um problema com a categoria',
    'category-edited': 'Foi editada a categoria',
    'category-search': 'Buscar categoria...',
    'category-deleted': 'A categoria foi eliminada!',
    'product-created': 'O produto foi criado! ',
    'product-edited': 'Foi editado um produto',
    'product-create-error': 'Ocorreu um erro modificando o produto',
    'recommended-size-file':
      'Recomendação: A imagem deve ter 500 x 500 px. em formato PNG e 2MB',
    'uploading-image-message':
      'Espere um momento, estamos carregando a imagem do seu estoque. Recomendamos que não saia até que o upload seja finalizado.',
    'change-name-message':
      'Para poder modificar o nome, mude o código único de barras',
    'remember-only-inventory': 'Lembre, isto deve ser único no seu inventário',
    'enter-value-purchase': 'Escreva o valor de compra',
    'value-provider-product': 'Valor pago ao fornecedor pelo produto',
    'value-sell': 'Escreva o valor de venda',
    'without-category': 'Sem categoria',
    'add-description': 'Inclua uma descrição',
    'show-category-shop': 'Mostrar categoria na Trinta SHOP',
    'show-product-shop': 'Mostrar produto na Trinta SHOP',
    'delete-category': 'Eliminar categoria',
    'field-max-lenght': 'Já tem o máximo de 50 caractéres para este espaço',
    'field-max-lenght-name':
      'Você excedeu o máximo de 500 caracteres para este campo.',
    'field-max-lenght-notes':
      'Já tem o máximo de 150 caractéres para este espaço',
    'select-order': {
      alphabetic: 'Alfabeticamente',
      sales: 'Mais vendidos',
      profit: 'Mais rentáveis',
      stock: 'Últimas unidades',
      recent: 'Mais recentes',
      max_price: 'Preço maior',
      min_price: 'Menor preço',
      max_cost: 'Custo maior',
      min_cost: 'Menor custo',
      order: 'Ordenar:',
    },
    'error-load-stats':
      'Ocorreu um problema durante a consulta das estatísticas!',
  },
  'internal-error': {
    title: 'Desculpa, occoreu um problema técnico',
    subtitle: 'Esperamos que esteja solucionado na sua próxima visita',
  },
  'landing-mobile': {
    'android-banner':
      '<bold>Oi! Para acessar a Trinta Web você deve estar no seu computador.</bold> Descarrega já a sua App da Trinta',
    'ios-banner':
      '<bold>Oi! para acessar a sua Trinta Web você deve estar no seu computador.</bold>  Em breve estará disponível a versão do celular.',
    'android-button': 'Descarregar agora!',
  },
  'contacts-form': {
    'client-singular-lower': 'cliente',
    'name-placeholder': 'Escreva o nome',
    'phone-placeholder': 'Escreva o número',
    'document-placeholder': 'Escreva o número do documento',
    'comment-placeholder': 'Deixe um comentário',
    'create-new-contact': 'Criar um novo {{contactType}}',
    'input-placeholder-supplier': 'Buscar ou selecionar um fornecedor...',
    'input-placeholder-client': 'Buscar ou selecionar um cliente...',
    'client-plural-lower': 'clientes',
    'client-plural-pascal': 'Clientes',
    'supplier-singular-lower': 'fornecedor',
    'supplier-plural-lower': 'fornecedores',
    'supplier-plural-pascal': 'Fornecedores',
    'no-contacts': 'Ainda não tem {{contactType}} criados',
    'create-title': 'Novo {{contactType}}',
    'edit-title': 'Editar {{contactType}}',
    'unique-name-error':
      'Este {{contactType}} já foi visto antes, ele já está registrado.',
    'required-text':
      'Os campos marcados com um asterisco (<requiredIndicator>*</requiredIndicator>) são obrigatórios.',
    'input-name': 'Nome<requiredIndicator>*</requiredIndicator>',
    'input-phone': 'Número de celular',
    'input-phone-error': 'O número não é válido',
    'input-document-type': 'Tipo de documento',
    'input-document-type-placeholder': 'Escolha um documento',
    'input-document-type-error': 'espaço requerido',
    'input-document': 'Número do documento',
    'input-comments': 'Comentário',
    'input-comments-placeholder': 'Deixar um comentário',
    'create-button-label': 'Criar {{contactType}}',
    'create-successful': 'O {{contactType}} foi criado!',
    'create-error': 'Ocorreu um problema com o {{contactType}}',
    'edit-successful': 'Foram guardadas as mudanças',
    'edit-error': 'Ocorreu um problema com o {{contactType}}',
    'delete-button-label': 'Eliminar {{contactType}}',
    'delete-successful': 'O {{contactType}} foi eliminado',
    'delete-error': 'Ocorreu um problema com o {{contactType}}',
    'confirm-delete-title': 'Gostaria de eliminar este {{contactType}}?',
    'confirm-delete-text':
      'Assim que eliminar o {{contactType}},  não poderá recuperar a informação registrada.',
    'add-client': 'Adicionar um cliente à venda',
    'add-provider': 'Adicionar um fornecedor à gasto',
  },
  'confirm-exit': {
    title: 'Há informação sem salvar ',
    text: 'Gostaria de sair?',
    'exit-button-label': 'Sim, sair',
    'keep-editing-button-label': 'Seguir editando',
  },
  'confirm-delete': {
    'delete-button-label': 'Sim, eliminar',
    'return-button-label': 'Voltar',
  },
  'transaction-table': {
    'description-empty':
      'Ainda não há registros criados, comece adicionando com <b>"Nova venda"</b> e <b>"Novo gasto"</b>',
    'column-date': 'Data',
    'column-description': 'Conceito',
    'column-payment-type': 'Forma de pagamento',
    'column-value': 'Valor',
    'column-actions': 'Ações',
    'empty-product': 'Você não tem produtos',
    'contact-name': 'Clientes/fornecedores',
    'empty-message':
      'Para fazer vendas primeiro adicione produtos ao seu estoque ou você também pode registrar sua entrada como uma venda livre.',
  },
  'store-form': {
    'store-type': 'Tipo de negócio',
    'store-type-placeholder': 'Escolha uma categoria',
    'store-name': 'Nome da empresa<requiredIndicator>*</requiredIndicator>',
    'store-name-placeholder': 'Escreva o nome',
    'store-address': 'Endereço comercial',
    'store-address-placeholder': 'Insira o endereço',
    'store-city': 'Cidade',
    'store-city-placeholder': 'Escreva a cidade',
    'store-email': 'Email',
    'store-email-placeholder': 'Escreva o e-mail',
    'store-document': 'Documento',
    'store-document-placeholder': 'Escreva o documento',
    'create-store-title': 'Criar um novo negócio',
    'edit-store-title': 'Editar negócio',
    'created-store-succesful': 'Seu negócio foi criado com sucesso',
    'created-store-error': 'Não pudemos criar seu negócio. Tente novamente',
    'create-store-button-label': 'Criar negócio',
    'edit-store-button-label': 'Salvar mudanças',
    'phone-placeholder': 'Escreva o número',
    'input-phone-error': 'O número não é válido',
    'input-phone': 'Número do telefone',
    'updated-store-succesful': 'Seu negócio foi atualizado com sucesso',
    'updated-store-error': 'Não pudemos atualizar seu negócio. Tente novamente',
    'delete-label': 'Eliminar este negócio',
    'delete-successful': 'Seu negócio foi eliminado com sucesso',
    'delete-error': '¡Ha ocurrido un problema con el negocio!',
    'confirm-delete-title': 'Quer eliminar este negócio?',
    'confirm-delete-text':
      'Uma vez que o negócio tenha sido excluído, você não poderá recuperar as informações registradas.',
    'keep-editing-button-label': 'Continuar com o perfil',
  },
  'empty-search': {
    text: 'Nenhum resultado foi encontrado para <bold>"{{{search}}"</bold> por favor tente outra busca',
  },
  'head-tags': {
    keywords:
      'Trinta web, Trinta app web, web Trinta, Trinta app de computador, Trinta app pc',
    description:
      'O melhor de seu aplicativo Trinta, agora disponível em seu computador. Além disso, adicionamos novas funcionalidades que você vai adorar, como a capacidade de carregar seu inventário em massa.',
    title: 'Trinta WEB',
  },
  'filters-rightbar': {
    title: 'Filtros',
    'payment-methods-selector': 'Formas de pagamento',
    'employees-button-label': 'Empregados',
    'employees-button-placeholder': 'Todos os empregados',
    'employees-button-multiple-value': ' empregados selecionados',
    'customers-button-label': 'Clientes',
    'customers-button-placeholder': 'Todos os clientes',
    'customers-button-multiple-value': ' clientes selecionados',
    'suppliers-button-label': 'Fornecedores',
    'suppliers-button-placeholder': 'Todos os fornecedores',
    'suppliers-button-multiple-value': ' fornecedores selecionados',
    'button-clear-label': 'Limpar',
    'clean-filters-button': 'Limpar filtros',
    'filter-button': 'Filtrar',
  },
  'select-employees': {
    title: 'Selecione os empregados',
    'search-input': 'Procurar empregado...',
    'user-type-owner': 'Proprietário',
    'user-type-manager': 'Administrador',
    'user-type-employee': 'Empregado',
    'user-type-seller': 'Vendedor',
    'empty-state-label':
      'Nenhum resultado encontrado para <bold>"{{search}}"</bold> tente outra pesquisa',
    'confirm-button': 'Confirmar',
  },
  'select-contacts': {
    'customer-singular': 'cliente',
    'customer-plural': 'clientes',
    'supplier-singular': 'fornecedor',
    'supplier-plural': 'fornecedores',
    title: 'Selecionar {{contactType}}',
    'search-input': 'Busca de {{contactType}}...',
    'empty-state-label':
      'Nenhum resultado encontrado para <bold>"{{search}}"</bold> tente outra pesquisa',
    'confirm-button': 'Confirmar',
  },
  'filter-tags-section': {
    'main-label': 'Filtros aplicados',
    'clean-label': 'Limpar filtros',
  },
  'inventory-table': {
    product: 'Produto',
    price: 'Preço de venda',
    cost: 'Custo',
    available: 'Disponível',
    actions: 'Ações',
  },
  'balance-header-section': {
    daily: 'Diário',
    weekly: 'Semanal',
    monthly: 'Mensal',
    yearly: 'Anual',
    custom: 'Intervalo personalizado',
    'search-input-placeholder': 'Pesquisar item...',
  },
  'validate-file': {
    'empty-name':
      'Você inseriu produtos sem nome. Certifique-se de que todos os produtos que você deseja enviar tenham um nome.',
    'duplicate-sku':
      'Você inseriu produtos com códigos de barras repetidos. Certifique-se de que todos os produtos que você deseja enviar tenham um código de barras exclusivo.',
    'duplicate-name':
      'Há produtos repetidos em seu arquivo. Certifique-se de registrar todos os seus produtos com nomes diferentes.',
  },
  'error-page': {
    'home-button-label': 'Voltar',
  },
  'not-found-page': {
    'home-button-label': 'Voltar',
  },
  'store-types': {
    'not-configured': 'Não configurado',
    [StoreTypeKeys.supermarket]: 'Supermercado ou loja de conveniência',
    [StoreTypeKeys.industry]: 'Indústria ou manufatura',
    [StoreTypeKeys.logistics]: 'Serviços de transporte e logística',
    [StoreTypeKeys.clothing]: 'Roupas, sapatos e acessórios',
    [StoreTypeKeys.farming]: 'Agricultura e pecuaría',
    [StoreTypeKeys.hardwareStore]: 'Loja de ferragens e construção',
    [StoreTypeKeys.computing]: 'Electrônica e computação',
    [StoreTypeKeys.homeFurniture]: 'Artigos domésticos',
    [StoreTypeKeys.pharmacy]: 'Farmácia e drogaria',
    [StoreTypeKeys.liquorStore]: 'Loja de bebidas',
    [StoreTypeKeys.restaurant]: 'Restaurantes, bar ou fast food',
    [StoreTypeKeys.professionalServices]: 'Serviços profissionais',
    [StoreTypeKeys.personal]: 'Pessoal',
    [StoreTypeKeys.other]: 'Outros',
    [StoreTypeKeys.beauty]: 'Artigos de beleza',
    [StoreTypeKeys.hotels]: 'Hotéis e turismo',
    [StoreTypeKeys.autoShop]: 'Oficina mecânica',
    [StoreTypeKeys.petShop]: 'Pet shop ou veterinário',
    [StoreTypeKeys.healthFood]: 'Loja de produtos naturais',
    [StoreTypeKeys.toys]: 'Venda de brinquedos ou livros',
    [StoreTypeKeys.farmProducts]: 'Venda de produtos agrícolas',
    [StoreTypeKeys.textiles]: 'Venda de têxteis',
    [StoreTypeKeys.catalogue]: 'Venda por catálogo',
  },
  maintenance: {
    title: 'Não é você, somos nós.',
    text: 'Estamos em manutenção para lhe oferecer uma melhor experiência. Por favor, tente novamente mais tarde.',
  },
  'whatsapp-button': {
    'label-home': 'Precisa de ajuda?',
    'label-sign-up': 'Você tem problemas com o registro?',
    'label-login': 'Você tem problemas para entrar em Trinta?',
  },
  'detail-orders': {
    title: 'Order',
    'section-client': {
      subtitle: 'Dados do cliente',
      'first-name': 'Nome do cliente*',
      'last-name': 'sobrenome do cliente*',
      phone: 'Telefone*',
      'document-type': 'Tipo de documento*',
      document: 'Número do documento*',
    },
    'section-origin': {
      subtitle: 'endereço de origem',
      direction: 'endereço de origem*',
      store: 'Adega de origem*',
    },
    'section-destination': {
      subtitle: 'destino do pedido',
      location: 'Localização*',
      'delivery-address': 'Endereço de entrega*',
      'address-detail': 'detalhe do endereço*',
    },
    'section-total': {
      subtitle: 'Valor total dos pedidos',
      'base-value': 'Valor base*',
      'discount-value': 'valor de desconto*',
      'total-value': 'valor total do pedido*',
    },
  },
};
