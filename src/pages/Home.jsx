export default function HomePage() {
  return (
    <main>
      <h1 className="font-extrabold tracking-tight text-4xl">
        Navigating Change During COVID-19
      </h1>
      <h2 className="text-3xl font-semibold tracking-tight mt-4">
        US Economy, Healthcare and Environmental Analysis
      </h2>
      <div className="mt-10 flex flex-col gap-y-4">
        <section className="flex flex-col gap-y-2">
          <h3 className="font-semibold text-xl">Goal</h3>
          <p>
          Ever since the global, COVID-19 pandemic, there exists a growing interest in understanding the profound 
          impact it had on American society. This application provides users with in-depth insights and analyses into 
          how the pandemic has affected three critical areas of the U.S.: economy, healthcare, and the energy sector. 
          This application provides a platform to examine data and trends before and after the pandemic aiming to shed 
          light on the challenges, new opportunities, and transformations that have resulted.
          </p>
          <p>
          This application aims to present a comprehensive overview of the United States economy by displaying the
          trends in number of establishments in different business sectors, number of startups, and total tax collections 
          as the COVID-19 pandemic unfolded. This information can lead to informed decision making, economic resilience, 
          policy evaluation, resource allocation, long-term planning, and global insights. Our application also displays 
          the trends in CO2 emissions to understand the effect COVID-19 had on the environment and energy sector 
          emissions. This information can be leveraged for better environmental awareness, impact assessment, 
          conservation efforts, and climate resilience. Lastly, the application serves as a platform to understand 
          the relationship between rising COVID-19 cases and payroll changes in the healthcare business sector. 
          This can help key stakeholders better support pandemic preparedness, health system resilience, healthcare 
          innovation, and healthcare policy.
          </p>
        </section>
        <section className="flex flex-col gap-y-2">
          <h3 className="font-semibold text-xl">Trends</h3>
          <p>
          <b>1. How did the number of COVID-19 cases in the different states of the US affect the amount of CO2 emissions produced per energy sector per year of that state over time? Did a certain energy sector see an increase or decrease in fuel emissions based on increasing COVID-19 cases? </b>
          </p>
          <p>
          This trend query is looking into the relationship between the number of positive COVID-19 case reports and the amount of CO2 emissions produced in different energy sectors within each state. These energy sectors include residential, industrial, commercial, transportation, and electric power. With the ability to look over multiple energy sectors, we should be able to understand on a finer level what occurred in the U.S in terms of energy consumption as the nation adjusted to the rise of the global pandemic. 
          </p>
          <p>
          <b>2. How does the number of confirmed COVID-19 cases in a state affect the number of establishments per business sector of that state over the course of 2019-2022? Which business sectors saw dramatic changes in open or closed businesses? </b>
          </p>
          <p>
          This trend query aims to understand how each state responded to increasing COVID-19 cases when it came to the number of businesses in a certain category that stayed open or had to close. COVID-19 forced many businesses that were obsolete in the face of a global pandemic to shut down, but was there a particular business type that saw an increase in establishments across the nation during this time? 
          </p>
          <p>
          <b>3. How did the employment payroll of different business categories per state change over the course of COVID-19? What can this tell us about which industries were particularly important during COVID-19 and which became obsolete? </b>
          </p>
          <p>
          This trend query aims to give us a deeper insight into which businesses had to increase or decrease their number of employees to combat the effects of rising COVID-19 cases. We want to see if there is a relationship between the rise in COVID and how different types of businesses had to react. This could also help explain which types of businesses were particularly important during the wave of the pandemic and which industries became obsolete. 
          </p>
          <p>
          <b>4. Based on the county business patterns data, if we look at the total number of corporate establishments that offer employment to less than 100 people, what has been the growth and decline of small businesses in each state of the US during COVID-19 over the course of 2019-2022? From this, can we identify which states provide the most supportive environment for entrepreneurs and start-ups pre, during and post COVID-19? </b>
          </p>
          <p>
          This trend query aims to understand how each state supports small businesses and entrepreneurs over time based on the number of established businesses that provide employment to less than 100 people. When looking at each state’s business patterns data, we can find which state provides the best environment for small businesses and how this may have changed due to the COVID-19 pandemic.
          </p>
          <p>
          <b>5. Based on state government tax data, what were the business categories that generated the most tax revenue in the different states of the US during COVID-19 over the course of 2019-2022? Similarly, can we identify the sources that were the most significant contributors to the US’s overall tax revenue over that time period? </b>
          </p>
          <p>
          This relationship aims to find an answer to the question of which business categories are the most significant contributors to a state’s economy over time. By looking at which category of industries paid the most in taxes per year, we can get an idea of which businesses are the most important to the prosperity of each state and how COVID-19 could have affected it and then how this compares to other states across the country. 
          </p>

        </section>
        <section className="flex flex-col gap-y-2">
          <h3 className="font-semibold text-xl">Datasets</h3>
          <p>
          <b>1. US Covid Cases Dataset</b>
          <p>This dataset is hosted by the Centers for Disease Control and Prevention (CDC) that contains public use data regarding COVID-19 case surveillance, particularly, with geographic indicators in the country of US between period 01-2020 through 08-2023. </p>
          <p>Here is a summary of the of the fields for trend analysis: </p>
            <ol style={{ listStyleType: 'disc' }}>
                <li><b>Case month: </b> Represents the month when the case was reported.</li>
                <li><b>Resident's State: </b>Indicates the state of residence of the individual.</li>
                <li><b>Resident's County: </b>County of residence of the individual</li>
                <li><b>Age Group: </b>Age group to which the individual belongs.</li>
                <li><b>Sex: </b>Gender of the individual.</li>
                <li><b>Race: </b>Race of the individual.</li>
                <li><b>Ethnicity: </b>Ethnicity of the individual.</li>
                <li><b>Case Confirmation Type: </b>Status of the individual (e.g., Laboratory-confirmed case, Probable case).</li>
            </ol>
          </p>


          <p>
          <b>2. US County Business Patterns Dataset</b>
          <p>County Business Patterns (CBP) this dataset is provided by the United States Census Bureau. The CBP program produces annual statistical data that provides useful information about business activity in the United States. This dataset provides information at the ZIP Code level, including the number of establishments, employment during the week of March 12, first quarter payroll, and annual payroll. </p>
          <p>Here is a summary of the of the fields for trend analysis: </p>
            <ol style={{ listStyleType: 'disc' }}>
                <li><b>Type of business: </b> Category of the business.</li>
                <li><b>Number of Establishments: </b>Count of business locations.</li>
                <li><b>Employment: </b>Number of employees. </li>
                <li><b>Payroll: </b>Total annual payroll expenses.</li>
                <li><b>NAICS Code: </b>North American Industry Classification System code representing the industry type.</li>
                <li><b>Geographic Area: </b>Specifies the area for which the data is reported (county, ZIP code, metro area, etc.).</li>
            </ol>
          <p>Types of business categories include:</p>
            <ol style={{ listStyleType: 'disc' }}>
                <li>Agriculture, Forestry, Fishing, and Hunting</li>
                <li>Mining, Quarrying, and Oil and Gas Extraction</li>
                <li>Utilities</li>
                <li>Construction</li>
                <li>Manufacturing</li>
                <li>Wholesale Trade</li>
                <li>Transportation and Warehousing</li>
                <li>Finance and Insurance</li>
                <li>Real Estate and Rental and Leasing</li>
                <li>Administrative and Support and Waste Management and Remediation Services</li>
                <li>Educational Services</li>
                <li>Health Care and Social Assistance, etc.</li>
            </ol>
          </p>


          <p>
          <b>3. US Fossil Fuel Emissions Patterns Dataset</b>
          <p>This dataset is hosted by the U.S. Energy Information Administration (EIA). The EIA is a principal agency responsible for collecting, analyzing, and disseminating independent and impartial energy information to promote sound policymaking, efficient markets, and public understanding regarding energy and its interaction with the economy and the environment. This specific dataset pertains to emissions at the state level.</p>
          <p>Here is a summary of the of the fields for trend analysis: </p>
            <ol style={{ listStyleType: 'disc' }}>
                <li><b>State: </b>The US state to which the data row pertains.</li>
                <li><b>Year: </b>The year for which the data is recorded.</li>
                <li><b>Energy Sector: </b>The category of the emission source (e.g., Transportation, Industry, Residential).</li>
                <li><b>Fuel Type: </b>The type of fuel used in energy production (e.g., coal, natural gas, petroleum products)</li>
                <li><b>Emission Amount: </b>The quantity of emissions, measured in parts per million.</li>
            </ol>
          </p>


          <p>
          <b>4. US State Tax Dataset</b>
          <p>The State Government Tax Dataset is typically a collection of data that provides information on the various taxes collected by state governments in the United States. This dataset is significant for economists, policy makers, researchers, and the public as it provides insights into the financial health of the states and their fiscal policies.</p>
          <p>Here is a summary of the of the fields for trend analysis: </p>
            <ol style={{ listStyleType: 'disc' }}>
                <li><b>State Identifier: </b>The name or code of the state.</li>
                <li><b>Tax Type: </b>The type of tax being collected, such as income tax, sales tax, property tax, corporate tax, etc.</li>
                <li><b>Tax Revenue: </b>The amount of revenue collected from each type of tax, usually represented in dollars.</li>
                <li><b>Fiscal Year: </b>The fiscal year for which the data is applicable.</li>
                <li><b>Tax Rate: </b>The rate at which the tax is applied. This could be different for different types of taxes and different income brackets.</li>
                <li><b>Tax Base: </b>The total value or volume of the taxable goods, services, or income.</li>
                <li><b>Exemptions and Deductions: </b>Information on any exemptions or deductions that are applicable.</li>
                <li><b>Tax Burden: </b>The proportion of income that the residents of the state pay in taxes.</li>

            </ol>
          </p>


        </section>
      </div>
    </main>
  );
}
