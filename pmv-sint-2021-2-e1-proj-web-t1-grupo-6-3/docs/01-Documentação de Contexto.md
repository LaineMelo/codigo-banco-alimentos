# Introdução

É notório que o quadro econômico brasileiro vem se agravando há alguns anos devido à diversas crises internas e externas. As taxas de desemprego no país já eram altas e a situação piorou demasiadamente com surgimento do novo Coronavírus que resultou em uma pandemia mundial.
Com a redução dos investimentos em vários setores, o Brasil que já atravessava um momento difícil com altos índices de brasileiros desempregados viu esse número aumentar e hoje já somam quase quinze milhões de desempregados. 
Segundo o IBGE
> <ins> A taxa de desocupação foi de 14,6% no trimestre fechado em maio, ficando estável em relação ao trimestre encerrado em fevereiro (14,4%). Isso corresponde a 14,8 milhões de pessoas buscando um trabalho no país. Essa taxa é a segunda maior da série histórica, iniciada em 2012 pelo IBGE. A taxa recorde (14,7%) foi registrada nos dois trimestres móveis imediatamente anteriores, fechados em março e abril. (AGÊNCIA IBGE NOTÍCIAS, 2021)</ins>

Cabe ressaltar que não entram nessas estatísticas os ditos desalentados que são aqueles que desistiram de procurar uma ocupação. Os desalentados são definidos como aqueles que estão fora da força de trabalho por uma das seguintes razões: não conseguem trabalho, ou não tem experiência, ou são muito jovens ou idosos, ou não encontraram trabalho na localidade. Segundo o IBGE, esses já somam 5,6 milhões somente no 2º semestre de 2021. 
Com tantos brasileiros em situação de vulnerabilidade o trabalho de pessoas e instituições que buscam de alguma forma amenizar o sofrimento desses cidadãos é fundamental para a manutenção da dignidade deste que somam as estatísticas. Uma dessas formas é por meio de doações de alimento.
No entanto, muitas das vezes a captação das doações e sua distribuição geram dificuldades, já que não basta apenas recolher os alimentos doados. Desta forma, faz-se necessário uma logística para que os alimentos doados sejam destinados as pessoas que necessitam, obedecendo a quantidade estabelecida por pessoa de forma que todos sejam beneficiados de forma igualitária.

O projeto em questão propõe a criação de um Website para auxiliar o Banco de Alimentos de Poços de Caldas, criado pela prefeitura de mesmo nome, visando otimizar o processo de doação de cestas básicas através do cadastramento dos beneficiários e controle da distribuição de cesta básica.
Problema

## Problema
Atualmente o Banco de Alimentos de Poços de Caldas dispõe de alguns postos de doação de alimentos, no entanto não possui uma interface que permite o cadastramento dos beneficiários das doações, o que gera diversos problemas como a dificuldade em controlar que cada beneficiário receba apenas uma cesta básica por campanha, o que não permite que o processo seja transparente e igualitário a todos.

## Objetivos

Este projeto busca desenvolver uma aplicação web que crie a interface de cadastramento de beneficiários e o controle de entrega das cestas básicas.
Tem como objetivo específico:

•	Permitir que o usuário consiga cadastrar, atualizar e excluir os beneficiários da campanha de doação;

•	Registrar e controlar a entrega das cestas básicas por beneficiário, inibindo o recebimento indevido de forma a garantir a distribuição igualitária a todos os beneficiários.

## Justificativa

O presente projeto se justifica na medida em que foi identificado a ausência de mecanismos que permitam o planejamento e coordenação no cadastramento e distribuição de cestas básicas para pessoas carentes do Banco de Alimentos de Poços de Caldas.

Conforme a LEI Nº 11.346, DE 15 DE SETEMBRO DE 2006
> <ins> Art. 2º "A alimentação adequada é direito fundamental do ser humano, inerente à dignidade da pessoa humana e indispensável à realização dos direitos consagrados na Constituição Federal, devendo o poder público adotar as políticas e ações que se façam necessárias para promover e garantir a segurança alimentar e nutricional da população" (BRASIL, 2006).</ins>

A ausência de mecanismos de controle de doações acarreta a diminuição do alcance que o programa poderia atingir. Desta forma, uma aplicação web voltada para o cadastramento dos beneficiários e ao gerenciamento da distribuição de cestas básicas proporcionará uma distribuição igualitária dos recursos a aqueles que necessitam.
Nesse contexto, justifica-se o presente projeto que abordará a problemática aplicada à área de Sistemas para Internet com o intuito de produzir uma aplicação web que permita o cadastramento de beneficiários e controle de distribuição das cestas básicas da campanha.

## Estado da Arte

Nas pesquisas realizadas observa-se a ausência de aplicações web para gerenciamento e distribuição de cestas que auxiliem programas sociais. Em sua maior parte são websites para direcionamento e informação ou aplicações web para arrecadação de doações.

Além destes, outro sistema para gerenciamento encontrado foi o ‘Santa Cesta’, aplicativo disponível para aparelhos Android que foi desenvolvido por estudantes da Fatec de Itapetininga (SP) destinado para instituições de assistência, igrejas e organizações não governamentais para auxiliar na distribuição de cestas com o intuito de evitar, assim como ocorre na Prefeitura de Poços de Caldas, a retirada de duas ou mais cestas pela mesma pessoa. Criando-se um banco de dados que possibilite o controle dos beneficiários cruzando informações entre as igrejas cadastradas e quais famílias retiraram a doação (G1,2019).

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<table>
  <thead>
    <tr>
      <th>Imagens da Pesquisa</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-6/main/Prefeitura%20de%20Franca.png?token=AVWAR2QMKTDTYZZXSRLS2PLBJ6LF4" alt="Prefeitura de Franca"></td>
      <td>Imagem 1 - A prefeitura de Franca disponibiliza listas com relação de beneficiários de acordo com a região onde se encontra a cesta para retirada.</td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-2-e1-proj-web-t1-grupo-6/main/Prefeitura%20de%20BH.png?token=AVWAR2QHUR2U3BOLYLTYZW3BJ6KRU" alt="Prefeitura de BH"></td>
      <td>Imagem 2 - Plataforma da prefeitura de Belo Horizonte para consulta da retirada da cesta básica e kits de higiene.
</td>
    </tr>
  </tbody>
  <tfoot>
  </tfoot>
</table>

</body>
</html>


## Público-Alvo

Funcionários da prefeitura de Poços de Caldas (MG) que serão responsáveis pelo gerenciamento e correta distribuição das cestas verdes para a população cadastrada.

