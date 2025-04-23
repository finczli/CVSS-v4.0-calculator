namespace Backend.Data.Models;

public class CVSS4
{
    #region Base metrics
    public AttackVector AttackVector  { get; set; }
    public Complexity AttackComplexity  { get; set; }
    public Requirements AttackRequirements  { get; set; }
    public HighLowScale PrivilegesRequired  { get; set; }
    public UserInteraction UserInteraction  { get; set; }
    
    public HighLowScale Confidentiality  { get; set; }
    public HighLowScale Integrity  { get; set; }
    public HighLowScale Availability  { get; set; }
    
    public HighLowScale SubsequentConfidentiality  { get; set; }
    public HighLowScale SubsequentIntegrity  { get; set; }
    public HighLowScale SubsequentAvailability  { get; set; }    
    #endregion

    #region Supplemental Metrics
    public Safety Safety  { get; set; }
    public Automatable Automatable  { get; set; }
    public Recovery Recovery  { get; set; }
    public ValueDensity ValueDensity  { get; set; }
    public VulnerabilityResponseEffort VulnerabilityResponseEffort { get; set; }
    public ProviderUrgency ProviderUrgency  { get; set; }
    #endregion

    #region Enviromental
    public AttackVector? EnvironmentalAttackVector  { get; set; }
    public Complexity? EnvironmentalAttackComplexity  { get; set; }
    public Requirements? EnvironmentalAttackRequirements  { get; set; }
    public HighLowScale? EnvironmentalPrivilegesRequired  { get; set; }
    public UserInteraction? EnvironmentalUserInteraction  { get; set; }
    public HighLowScale? EnvironmentalConfidentiality  { get; set; }
    public HighLowScale? EnvironmentalIntegrity  { get; set; }
    public HighLowScale? EnvironmentalAvailability  { get; set; }
    
    public SubsequentHighLowScale? EnvironmentalSubsequentConfidentiality  { get; set; }
    public SubsequentHighLowSafeScale? EnvironmentalSubsequentIntegrity  { get; set; }
    public SubsequentHighLowSafeScale? EnvironmentalSubsequentAvailability  { get; set; }
    #endregion

    #region Enviromental

    public HighMediumLowScale? EnvironmentalConfidentialityRequirements { get; set; }
    public HighMediumLowScale? EnvironmentalIntegrityRequirements { get; set; }
    public HighMediumLowScale? EnvironmentalAvailabilityRequirements { get; set; }

    #endregion

    #region Threat metrics

    public ExploitMaturity? ExploitMaturity { get; set; }

    #endregion
    
    public int Score
    {
        get
        {
            
        }
    }
    
    public string Severity
    {
        get
        {
            return Score switch
            {
                >= 9 => "Critical",
                >= 7 => "High",
                >= 4 => "Medium",
                > 0 => "Low",
                _ => "None"
            };
        }
    }
}

public enum ExploitMaturity : byte
{
    Attacked,
    POC,
    Unreported
}
public enum HighLowScale : byte
{
    None,
    High,
    Low
}
public enum SubsequentHighLowScale : byte
{
    Negligible,
    High,
    Low
}
public enum HighMediumLowScale : byte
{
    High,
    Medium,
    Low
}
public enum SubsequentHighLowSafeScale : byte
{
    Safety,
    High,
    Low,
    Negligible
}
public enum AttackVector : byte
{
    Network,
    Adjacent,
    Local,
    Physical
}

public enum Complexity : byte
{
    High,
    Low
}

public enum Requirements : byte
{
    None,
    Present
}

public enum UserInteraction : byte
{
    None,
    Passive,
    Active
}

public enum Safety : byte
{
    NotDefined,
    Negligible,
    Present
}

public enum Automatable : byte
{
    NotDefined,
    No,
    Yes
}

public enum Recovery : byte
{
    NotDefined,
    Automatic,
    User,
    Irrecoverable,
}

public enum ValueDensity : byte
{
    NotDefined,
    Diffuse,
    Concentrated,
}

public enum VulnerabilityResponseEffort : byte
{
    NotDefined,
    Low,
    Moderate,
    High,
}

public enum ProviderUrgency : byte
{
    NotDefined,
    Clear,
    Green,
    Amber,
    Red
}